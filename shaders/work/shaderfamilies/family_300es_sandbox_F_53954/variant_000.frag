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

float iTime = 0.0;

const vec4 iMouse = vec4(0.0);

uniform vec2 GLF_dead5mouse;

float GLF_dead5dist_sphere(vec3 GLF_dead5pos, vec3 GLF_dead5cent, float GLF_dead5radius)
{
 return length(GLF_dead5pos - GLF_dead5cent) - GLF_dead5radius;
}
float GLF_dead5dist_plane(vec3 GLF_dead5pos, vec3 GLF_dead5point, vec3 GLF_dead5norm)
{
 return dot(GLF_dead5point - GLF_dead5pos, normalize(GLF_dead5norm));
}
float GLF_dead5dist_ground(vec3 GLF_dead5pos)
{
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(31.27, -7017.2672, -9645.5523, -3.6).braa;
  }
 return GLF_dead5pos.y;
}
float GLF_dead5dist_func(vec3 GLF_dead5pos)
{
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(-2.2, 53.75, -50.47, -3.8);
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
  if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
   {
    _GLF_color = vec4(-2009.5201, -235.280, -4012.3435, 381.022);
   }
  if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
   {
    _GLF_color = asin((vec4(-1751.3582, 78.29, -8930.0579, 61.30) - vec4(36.00, -1210.2369, -26.59, 8.2)));
   }
 }
 vec3 GLF_dead5cent = vec3((GLF_dead5mouse - vec2(.5, 0.)) * vec2(12., 3.), 0.) + vec3(0., 1.2, 7.);
 float GLF_dead5plane1 = GLF_dead5dist_plane(GLF_dead5pos, vec3(0., 0.2, 25.), vec3(1., 1., 1.));
 float GLF_dead5plane2 = GLF_dead5dist_plane(GLF_dead5pos, vec3(0., 0., 25.), vec3(- 1., 0.1, 1.));
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(8.0, 28.91, -90.70, 6.9);
  }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(603.745, -8030.4652, 488.052, -3.5);
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 float GLF_dead5ground = GLF_dead5dist_ground(GLF_dead5pos);
 float GLF_dead5dist = min(GLF_dead5plane1, GLF_dead5plane2);
 GLF_dead5dist = min(GLF_dead5dist, GLF_dead5ground);
 if(_GLF_DEAD(false))
  {
   _GLF_color = floor(mix(vec4(6.6, 3.1, 401.845, 6463.8452), vec4(-3167.8313, 5.1, -1622.7129, 992.397), bvec4(false, false, false, true)));
  }
 return GLF_dead5dist;
}
float GLF_dead5refr_dist_func(vec3 GLF_dead5pos)
{
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = floor(exp2(vec4(-958.423, 3.7, -2747.3332, 3352.9275)));
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = (vec4(4214.3540, 68.31, 44.35, 1.8) - 67.36);
  }
 vec3 GLF_dead5cent = vec3((GLF_dead5mouse - vec2(.5, 0.)) * vec2(12., 3.), 0.) + vec3(0., 1.2, 7.);
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(-2.4, 2.8, 3.3, -344.092);
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
    if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
     {
      _GLF_color = vec4(831.436, 5939.9408, -8717.1447, -89.73);
     }
   }
 }
 float GLF_dead5sphere = GLF_dead5dist_sphere(GLF_dead5pos, GLF_dead5cent, 1.);
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-68.93, -5705.6878, 0.6, -66.22);
  }
 return GLF_dead5sphere;
}
vec3 GLF_dead5refr_norm_func(vec3 GLF_dead5pos)
{
 float GLF_dead5es = 1e-3;
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   _GLF_color = vec4(1356.3657, -55.26, 2.7, 3.7);
  }
 float GLF_dead5dx = GLF_dead5refr_dist_func(GLF_dead5pos + vec3(GLF_dead5es, 0., 0.)) - GLF_dead5refr_dist_func(GLF_dead5pos - vec3(GLF_dead5es, 0., 0.));
 float GLF_dead5dy = GLF_dead5refr_dist_func(GLF_dead5pos + vec3(0., GLF_dead5es, 0.)) - GLF_dead5refr_dist_func(GLF_dead5pos - vec3(0., GLF_dead5es, 0.));
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   _GLF_color = vec4(8.6, -7.5, 58.30, -5390.2017);
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = mat3x4(-156.669, -0.7, -3567.4339, -16.41, 1.5, -8.8, 4077.5719, 7343.4687, -1703.8260, -6.4, -446.613, 32.20)[2].bgab;
  }
 float GLF_dead5dz = GLF_dead5refr_dist_func(GLF_dead5pos + vec3(0., 0., GLF_dead5es)) - GLF_dead5refr_dist_func(GLF_dead5pos - vec3(0., 0., GLF_dead5es));
 return normalize(- vec3(GLF_dead5dx, GLF_dead5dy, GLF_dead5dz));
}
float GLF_dead5refr_func(vec3 GLF_dead5pos)
{
 vec3 GLF_dead5cent = vec3((GLF_dead5mouse - vec2(.5, 0.)) * vec2(12., 3.), 0.) + vec3(0., 1.2, 7.);
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   _GLF_color = (vec4(6.9, -9.4, 39.44, 3.1) / -2.3);
  }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < log(1.0)))))
   {
    _GLF_color = vec4(-45.74, 232.685, -5.2, 3.4);
   }
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(-479.643, -50.76, 4.6, 5.9);
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
   {
    {
     vec4 _GLF_outVarBackup_GLF_color;
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(-6.5, 4.6, -963.578, 2.1);
      }
     _GLF_outVarBackup_GLF_color = _GLF_color;
     if(_GLF_DEAD(false))
      {
       _GLF_color = smoothstep(9060.4599, -9511.3894, vec4(-9.3, 5.9, -2.7, 92.58));
      }
     _GLF_color = atan(vec4(-1.6, -4100.1081, -37.48, -98.84), vec4(-3.6, -3.1, 6.6, 8.5));
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 float GLF_dead5sphere = GLF_dead5dist_sphere(GLF_dead5pos, GLF_dead5cent, 2.);
 if(GLF_dead5sphere < 0.)
  {
   return .6;
  }
 return 1.;
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   _GLF_color = vec4(5.8, 1.4, -9933.1987, 75.29);
  }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(8.6, -463.769, 9.6, -2573.8430);
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = vec4(8.2, 7358.3661, -4.3, 8.7);
  }
}
float GLF_dead3iTime = 0.0;

vec3 GLF_dead3pal(in float GLF_dead3t, in vec3 GLF_dead3a, in vec3 GLF_dead3b, in vec3 GLF_dead3c, in vec3 GLF_dead3d)
{
 return GLF_dead3a + GLF_dead3b * cos(6.28318 * (GLF_dead3c * GLF_dead3t + GLF_dead3d));
}
vec3 GLF_dead3spectrum(float GLF_dead3n)
{
 return GLF_dead3pal(GLF_dead3n, vec3(0.5, 0.5, 0.5), vec3(0.0, 0.5, 0.5), vec3(.0, 1.0, .0), vec3(0.62, 0.33, 0.37));
}
float GLF_dead3sdSphere(vec3 GLF_dead3p, float GLF_dead3s)
{
 return length(GLF_dead3p) - GLF_dead3s;
}
float GLF_dead3sdUnion_s(float GLF_dead3a, float GLF_dead3b, float GLF_dead3k)
{
 float GLF_dead3h = clamp(0.5 + 0.5 * (GLF_dead3b - GLF_dead3a) / GLF_dead3k, 0.0, 1.0);
 if(_GLF_DEAD(false))
  {
   _GLF_color = reflect(vec4(0.6, -8.2, -9300.5062, -2834.5247), vec4(7.3, -1349.7877, 9.1, -6220.4877));
  }
 {
  if(_GLF_DEAD(false))
   {
    _GLF_color = vec4(10.57, -7.1, 63.35, -7.2);
   }
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
   {
    _GLF_color = vec4(9983.7474, -917.202, 427.501, 4.7);
   }
  _GLF_color = vec4(9596.5420, 65.09, -618.525, 129.773);
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 return mix(GLF_dead3b, GLF_dead3a, GLF_dead3h) - GLF_dead3k * GLF_dead3h * (1.0 - GLF_dead3h);
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(29.34, -2.6, -1.4, 3.4);
  }
}
vec3 GLF_dead3carToPol(vec3 GLF_dead3p)
{
 float GLF_dead3r = length(GLF_dead3p);
 float GLF_dead3the = acos(GLF_dead3p.z / GLF_dead3r);
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(-6785.2204, -2.2, 9.0, -1.8);
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-31.62, -0.9, 7.5, -158.126);
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec3(-923.241, 8019.9997, 8.6).sppt;
    }
  }
 float GLF_dead3phi = atan(GLF_dead3p.y, GLF_dead3p.x);
 return vec3(GLF_dead3r, GLF_dead3the, GLF_dead3phi);
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = max(vec4(7.3, 22.15, 5.5, -51.12), -62.28);
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
}
mat3 GLF_dead3rotationXY(vec2 GLF_dead3angle)
{
 vec2 GLF_dead3c = cos(GLF_dead3angle);
 if(_GLF_DEAD(_GLF_IDENTITY(_GLF_FALSE(false, (gl_FragCoord.x < 0.0)), (true ? _GLF_IDENTITY(_GLF_FALSE(false, (gl_FragCoord.x < 0.0)), (_GLF_FALSE(false, (gl_FragCoord.x < 0.0))) && true) : _GLF_FUZZED(false)))))
  {
   _GLF_color = (true ? vec4(-451.334, -52.00, -18.47, -38.41) : asin(vec4(-487.767, 2537.1142, -24.13, -0.0)));
  }
 vec2 GLF_dead3s = sin(GLF_dead3angle);
 return mat3(GLF_dead3c.y, 0.0, - GLF_dead3s.y, GLF_dead3s.y * GLF_dead3s.x, GLF_dead3c.x, GLF_dead3c.y * GLF_dead3s.x, GLF_dead3s.y * GLF_dead3c.x, - GLF_dead3s.x, GLF_dead3c.y * GLF_dead3c.x);
}
float GLF_dead3sdVerticalCapsule(vec3 GLF_dead3p, float GLF_dead3h, float GLF_dead3r)
{
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  {
   vec4 _GLF_outVarBackup_GLF_color;
   _GLF_outVarBackup_GLF_color = _GLF_color;
   _GLF_color = vec4(-8.9, -2.6, 821.184, -1347.9131);
   if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
    {
     _GLF_color = _GLF_outVarBackup_GLF_color;
    }
  }
  _GLF_color = vec4(9.5, 15.88, -48.64, 3.9);
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 GLF_dead3p.z -= clamp(GLF_dead3p.z, 0.0, GLF_dead3h);
 return length(GLF_dead3p) - GLF_dead3r;
}
float GLF_dead3distortedCapsule(vec3 GLF_dead3p)
{
 float GLF_dead3dtime = 1.3 * GLF_dead3p.z - 2.0 * GLF_dead3iTime - 1.;
 float GLF_dead3dt = sin((GLF_dead3dtime) - 0.8 * sin(GLF_dead3dtime));
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-8.1, -7.7, 2057.9142, -5092.5873);
  }
 GLF_dead3p.x += 0.2 * (GLF_dead3p.z) * GLF_dead3dt;
 float GLF_dead3d = GLF_dead3sdVerticalCapsule(GLF_dead3p - vec3(0.5, 0, 0.1), 2.0, 0.05 * (4.0 - 1.5 * GLF_dead3p.z));
 float GLF_dead3d2 = GLF_dead3sdSphere(GLF_dead3p - vec3(0.5, 0, 2.2), 0.2);
 GLF_dead3d = GLF_dead3sdUnion_s(GLF_dead3d, GLF_dead3d2, 0.1);
 return GLF_dead3d;
}
float GLF_dead3map(vec3 GLF_dead3p)
{
 float GLF_dead3dt = sin((2.0 * GLF_dead3iTime + 2.5) - 0.8 * sin(2.0 * GLF_dead3iTime + 2.5));
 GLF_dead3p.x += 0.2 * GLF_dead3dt;
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   _GLF_color = vec4(1.7, 64.98, -6603.4781, -8.5);
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   _GLF_color = smoothstep(vec4(-3936.7944, -0.5, -415.373, 1429.3906), vec4(-2.4, -4.4, 421.251, 72.74), faceforward(vec4(-6.4, 7141.3299, 1458.7534, 505.355), vec4(8.2, 36.85, 845.980, 2.9), vec4(21.64, 23.70, 9.6, 877.681)));
  }
 float GLF_dead3d0 = GLF_dead3sdSphere(GLF_dead3p - vec3(0.2, 0, 0), 0.4);
 float GLF_dead3d2;
 vec3 GLF_dead3p1;
 for(
     float GLF_dead3i = 0.;
     GLF_dead3i < 9.;
     GLF_dead3i ++
 )
  {
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = acos((mat3x4(9.8, -79.28, 56.79, -0.0, 76.37, 2273.9615, 571.049, -99.77, 9.8, -70.52, -703.212, 6.5) * vec3(-2956.8264, -9.3, -9.8)));
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < tan(0.0)))))
       {
        _GLF_color = roundEven(vec4(-9.3, -9.1, -1.6, -77.81));
       }
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = sin(vec4(5679.8923, -8.0, -5.2, -30.44));
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(-7534.5459, 8.0, 9876.7537, -7816.6721);
        }
       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= tan(log(1.0))))))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
      if(_GLF_DEAD(false))
       {
        _GLF_color = vec4(279.672, 3.6, 7.2, -0.3);
       }
     }
   }
   GLF_dead3p1 = GLF_dead3rotationXY(vec2(GLF_dead3i * 2. * 3.14159265359 / 9., 0.8)) * GLF_dead3p;
   GLF_dead3d2 = GLF_dead3distortedCapsule(GLF_dead3p1);
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = vec4(-0.1, 13.82, -68.69, 9.2);
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = log2(vec4(-4.6, -6315.9273, -7.8, -24.35));
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
   GLF_dead3d0 = GLF_dead3sdUnion_s(GLF_dead3d0, GLF_dead3d2, 0.2);
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = acos(normalize(vec4(-3700.9306, 4474.4339, 6.0, -80.77)));
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
  }
 return GLF_dead3d0;
 {
  vec4 _GLF_outVarBackup_GLF_color;
  if(_GLF_DEAD(false))
   {
    _GLF_color = acos(vec4(-90.70, -45.37, -8.2, 3.2));
   }
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = asin(clamp(vec4(-1.3, 500.850, 4.8, 10.40), vec4(-1.8, 7123.5613, -8.2, 4152.0505), vec4(-8.3, -8.5, -7884.6480, -6.9)));
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
}
vec3 GLF_dead3gradient(vec3 GLF_dead3pos)
{
 if(_GLF_DEAD(_GLF_IDENTITY(false, ! (! (false)))))
  {
   {
    if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
     {
      _GLF_color = vec4(-3.4, 436.528, 3.0, 5851.1909);
     }
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = vec4(813.472, -2629.0446, 721.629, 326.284);
    if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   _GLF_color = vec4(6768.5939, 7.3, 3.2, 6.2);
  }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(-99.38, 8.3, 97.84, -9924.3343);
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 const vec3 GLF_dead3dx = vec3(0.01, 0.0, 0.0);
 const vec3 GLF_dead3dy = vec3(0.0, 0.01, 0.0);
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(-86.04, 66.19, -1.8, 8597.8838);
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 const vec3 GLF_dead3dz = vec3(0.0, 0.0, 0.01);
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  if(_GLF_DEAD(false))
   {
    _GLF_color = vec4(-600.440, 79.31, 4249.2801, 33.12);
   }
  _GLF_color = vec4(-3.6, 3.1, 975.720, -9.6);
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = acos(vec4(7.4, -33.75, 5.5, -0.5));
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
    if(_GLF_DEAD(_GLF_IDENTITY(false, ! (! (false)))))
     {
      if(_GLF_DEAD(false))
       {
        _GLF_color = vec4(5.7, 5.0, 8140.6261, -5.5);
       }
      _GLF_color = vec4(trunc(vec2(-30.25, 746.340)), -59.51, 80.14);
     }
   }
 }
 return normalize(vec3(GLF_dead3map(GLF_dead3pos + GLF_dead3dx) - GLF_dead3map(GLF_dead3pos - GLF_dead3dx), GLF_dead3map(GLF_dead3pos + GLF_dead3dy) - GLF_dead3map(GLF_dead3pos - GLF_dead3dy), GLF_dead3map(GLF_dead3pos + GLF_dead3dz) - GLF_dead3map(GLF_dead3pos - GLF_dead3dz)));
 {
  if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
   {
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(2.6, 46.78, -7958.9960, -763.173);
     }
    _GLF_color = (vec4(-119.604, 10.28, -476.559, -32.75) * (false ? vec4(-40.85, 5694.4624, 5881.9861, 916.491) : vec4(7082.1617, -94.75, 4676.0013, 1218.6436)));
   }
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = (vec4(76.71, -5523.7947, -9.6, -5.1) * vec4(6.0, 687.483, -1.2, -1.3));
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= sqrt(0.0)))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = (1.9 + vec4(-894.274, -4.9, -28.20, 623.481));
  if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
   {
    _GLF_color = floor(vec4(9.9, -2.3, 2.5, -4.1));
   }
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
}
vec3 GLF_dead3fresnel(vec3 GLF_dead3F0, vec3 GLF_dead3h, vec3 GLF_dead3l)
{
 return GLF_dead3F0 + (1.0 - GLF_dead3F0) * pow(clamp(1.0 - dot(GLF_dead3h, GLF_dead3l), 0.0, 1.0), 5.0);
}
vec3 GLF_dead3selfColor(vec3 GLF_dead3pos)
{
 if(_GLF_DEAD(_GLF_IDENTITY(false, ! (! (false)))))
  {
   _GLF_color = mix(vec4(-5.5, 897.780, -52.33, -384.055), vec4(0.0, -360.490, 872.456, 530.406), vec4(2.7, 129.613, -1.8, 6.5));
  }
 vec3 GLF_dead3pol = GLF_dead3carToPol(GLF_dead3pos - vec3(0.4, 0, 0));
 return GLF_dead3spectrum(0.45 * GLF_dead3pol.x);
}
vec3 GLF_dead3reflectedColor(in vec3 GLF_dead3p, in vec3 GLF_dead3rd)
{
 vec3 GLF_dead3Ks = vec3(0.7);
 float GLF_dead3shininess = 40.0;
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(3.3, -68.69, -8526.4714, -858.925);
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-72.73, -9518.4454, -6206.7456, 676.550);
  }
 vec3 GLF_dead3n = GLF_dead3gradient(GLF_dead3p);
 vec3 GLF_dead3ref = reflect(GLF_dead3rd, GLF_dead3n);
 vec3 GLF_dead3rc = vec3(0);
 vec3 GLF_dead3light_pos = vec3(15.0, 20.0, 2.0);
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-33.69, 3.2, 8112.9435, -4.4);
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = sin(vec4(-69.79, -23.24, -42.60, -6.6));
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
  }
 vec3 GLF_dead3light_color = vec3(1.0, 1.0, 1.0);
 {
  if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
   {
    _GLF_color = vec4(3.9, 6.5, -4.2, 4556.2630);
   }
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(799.123, 76.18, 2.6, -944.435);
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
     {
      _GLF_color = vec4(-1.2, 31.39, 53.90, 57.54);
     }
   }
 }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  if(_GLF_DEAD(false))
   {
    _GLF_color = vec4(4.9, 8.4, 71.30, -996.701);
   }
  _GLF_color = max(vec4(9.5, -9.9, -3.6, -8324.6413), vec4(-8.2, -7484.3398, -363.631, -6.8));
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
  {
   vec4 _GLF_outVarBackup_GLF_color;
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(-7.9, 3.0, 9.8, 596.080);
      }
     _GLF_color = ((-9392.1020 + (vec3(9887.0118, 44.12, -8.0) * mat3(871.177, -99.20, -59.63, -7.9, -583.214, -1.5, -8.4, 618.698, 295.978))) * mat4x3(33.32, -6423.1207, -25.41, -181.152, 5658.1546, -1.5, -309.514, -336.310, -817.400, 680.543, -910.106, 3.1));
    }
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = (reflect(vec2(351.886, -61.85), vec2(-124.860, -7970.1030)) * (mat4x2(-704.268, 634.784, -99.58, -1.4, 6838.8325, -7.6, -2.1, -53.13) - inversesqrt(41.15)));
    if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   _GLF_outVarBackup_GLF_color = _GLF_color;
   _GLF_color = log((abs(vec4(311.988, -940.656, -7675.5599, -8.3)) / 27.05));
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-1.2, -9.6, -2.6, 591.726);
    }
   if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
    {
     _GLF_color = _GLF_outVarBackup_GLF_color;
    }
  }
 }
 vec3 GLF_dead3vl = normalize(GLF_dead3light_pos - GLF_dead3p);
 vec3 GLF_dead3specular = vec3(max(0.0, dot(GLF_dead3vl, GLF_dead3ref)));
 vec3 GLF_dead3F = GLF_dead3fresnel(GLF_dead3Ks, normalize(GLF_dead3vl - GLF_dead3rd), GLF_dead3vl);
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-8725.5494, -9.0, -9.6, -4.7);
  }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  if(_GLF_DEAD(_GLF_IDENTITY(false, true && (false))))
   {
    _GLF_color = (mat2x4(526.229, 3.9, -73.62, 45.83, -87.72, -48.73, 71.64, -910.257) * vec2(-8.3, 88.22));
   }
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = exp2(vec4(-52.15, 4.1, -6875.6666, -334.319));
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 GLF_dead3specular = pow(GLF_dead3specular, vec3(GLF_dead3shininess));
 GLF_dead3rc += GLF_dead3light_color * GLF_dead3specular;
 return GLF_dead3rc;
}
uniform float GLF_dead2time;

float GLF_dead2dBox(vec3 GLF_dead2p, vec3 GLF_dead2b)
{
 {
  if(_GLF_DEAD(false))
   {
    _GLF_color = vec4(7.9, 732.606, 2629.3538, 5.5);
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = vec4(-6.1, 6.8, 6.2, -3.0);
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
       if(_GLF_DEAD(false))
        {
         _GLF_color = reflect(normalize(vec4(846.135, -3.8, 0.3, -3357.5092)), vec4(-626.253, -4.4, 801.593, 4429.6865));
        }
      }
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(-2663.8914, 5552.3167, 30.22, -777.494);
      }
    }
   }
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(2660.0969, -37.59, 96.52, -52.12);
  if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(true, (_GLF_IDENTITY(true, ! (! (true)))) && true)))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 vec3 GLF_dead2d = abs(GLF_dead2p) - GLF_dead2b;
 return min(max(GLF_dead2d.x, max(GLF_dead2d.y, GLF_dead2d.z)), 0.0) + length(max(GLF_dead2d, 0.0)) - 0.2;
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = pow(vec4(89.94, 37.48, 17.46, -20.10), pow(vec4(8.3, -95.29, -4.5, 180.642), vec4(609.158, -6.5, -8.0, -7.5)));
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(6196.2684, 1.6, 6.8, -1.2);
     }
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
}
vec2 GLF_dead2rep(inout vec2 GLF_dead2p, vec2 GLF_dead2o)
{
 vec2 GLF_dead2c = floor((GLF_dead2p + GLF_dead2o) / (GLF_dead2o * 2.0));
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-77.18, -7334.1685, -6.3, 53.73);
   {
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(2549.4764, 6.1, -3.7, 85.41);
     }
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = round(vec4(-8272.2122, -9.4, 2.3, 3.5));
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
  }
 GLF_dead2p = mod(GLF_dead2p + GLF_dead2o, GLF_dead2o * 2.00) - GLF_dead2o;
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = (mix(-3126.9998, 322.012, false) * vec4(-8126.8894, -7.6, 338.354, -4.1));
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 return GLF_dead2c;
}
vec2 GLF_dead2map(vec3 GLF_dead2p)
{
 GLF_dead2p.y += 1.0;
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(2288.8204, -986.590, -203.384, 68.05);
  if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < length(0.0)))))
   {
    _GLF_color = vec4(-2576.6334, 4.0, -4612.8255, -72.32);
   }
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 vec2 GLF_dead2c = GLF_dead2rep(GLF_dead2p.xz, vec2(.7));
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(764.309, 2566.2779, 8.8, -7.0);
  }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(4257.5668, -55.99, 973.366, 901.570);
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
    if(_GLF_DEAD(false))
     {
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = vec4(5579.8280, -712.356, -53.85, 6850.3644);
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
      _GLF_color = (-2.0 + vec4(-4.0, 90.02, -12.51, 4269.8040));
     }
   }
  if(_GLF_DEAD(false))
   {
    _GLF_color = vec4(-5070.9196, 8.9, 4.0, 5.7);
   }
 }
 return vec2(GLF_dead2dBox(GLF_dead2p, vec3(.5, 1.0 + 0.27 * cos(GLF_dead2c.x * GLF_dead2time + 1.0 * GLF_dead2c.x + 3.0 * GLF_dead2c.y), .5)), abs(GLF_dead2c.x + GLF_dead2c.y));
}
vec2 GLF_dead2intersect(vec3 GLF_dead2ro, vec3 GLF_dead2rd)
{
 float GLF_dead2td = 0.0;
 for(
     int GLF_dead2i = 0;
     GLF_dead2i < 128;
     GLF_dead2i ++
 )
  {
   vec2 GLF_dead2s = GLF_dead2map(GLF_dead2ro + GLF_dead2rd * GLF_dead2td);
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = step(626.955, (vec4(-1.1, 9.1, -5.4, -9.5)));
    if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   if(abs(GLF_dead2s.x) < 0.001)
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
      {
       _GLF_color = ceil(vec4(5.3, 783.353, 15.61, -3.1));
      }
     return vec2(GLF_dead2td, GLF_dead2s.y);
    }
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
     {
      _GLF_color = fract((vec4(7.5, 447.565, 7033.7490, 5.9) - -7.2));
     }
    _GLF_color = step(vec4(0.7, -2944.3807, -9.2, -6101.0757), vec4(-5.3, 1281.0279, 2575.6493, -30.91));
    if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= sqrt(0.0)))))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
       {
        _GLF_color = (vec2(1630.0830, 8.3) * mat4x2(-43.89, 6.1, 8400.6689, -43.46, 9.9, 3092.2021, -191.382, -294.109));
       }
     }
   }
   GLF_dead2td += GLF_dead2s.x * .5;
   {
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(-770.319, 4.7, 80.26, -3.2);
     }
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = vec4(-7891.7914, -376.076, -1.9, -5.7);
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      if(_GLF_DEAD(false))
       {
        _GLF_color = vec4(-39.14, 474.126, 8763.3420, 337.130);
       }
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(-0.3, -42.45, -5.8, 869.668);
      }
     _GLF_color = max(vec2(3440.6793, -2.8).rrrr, 660.337);
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       if(_GLF_DEAD(false))
        {
         _GLF_color = (vec4(-8.0, -84.01, -9001.3543, 6.0) + 6.0);
        }
       _GLF_color = _GLF_outVarBackup_GLF_color;
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(94.90, 1.6, -4251.3362, 287.192);
        }
      }
    }
   }
  }
 return vec2(10.0, - 1.0);
 {
  if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
   {
    _GLF_color = (vec2(7.8, 4.1) * (- mat4x2(-6297.5995, 6.2, 0.7, 9221.7926, 6451.6888, -1542.6981, 32.47, 4.8)));
   }
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  if(_GLF_DEAD(false))
   {
    _GLF_color = vec4(-29.08, -183.741, -2678.3780, 3.4);
   }
  _GLF_color = fract(vec4(333.810, 7.8, 9062.3508, 9.5));
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= _GLF_ZERO(0.0, injectionSwitch.x)))))
   {
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = mix(vec4(981.820, -5943.3810, 6.3, 61.53), vec4(7.7, 24.38, -8.5, 9219.7375), vec4(-0.5, -94.60, 439.809, -23.80));
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
     if(_GLF_DEAD(false))
      {
       _GLF_color = fract(vec4(-8.9, 5.9, 55.87, -64.66));
      }
    }
    _GLF_color = _GLF_outVarBackup_GLF_color;
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(0.1, 7423.6564, -859.622, 9148.5493);
     }
   }
 }
}
vec3 GLF_dead2normal(vec3 GLF_dead2p)
{
 vec2 GLF_dead2h = vec2(0.01, 0.0);
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(1271.9805, -8.6, 6833.5085, 947.403);
  }
 vec3 GLF_dead2n = vec3(GLF_dead2map(GLF_dead2p + GLF_dead2h.xyy).x - GLF_dead2map(GLF_dead2p - GLF_dead2h.xyy).x, GLF_dead2map(GLF_dead2p + GLF_dead2h.yxy).x - GLF_dead2map(GLF_dead2p - GLF_dead2h.yxy).x, GLF_dead2map(GLF_dead2p + GLF_dead2h.yyx).x - GLF_dead2map(GLF_dead2p - GLF_dead2h.yyx).x);
 {
  vec4 _GLF_outVarBackup_GLF_color;
  if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
   {
    _GLF_color = vec4(-617.720, -9.3, 640.349, -0.5);
   }
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(584.594, 6119.1798, -357.298, 960.286);
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = trunc(vec4(6.5, 88.70, 5.5, 2.9));
  }
 return normalize(GLF_dead2n);
}
vec3 GLF_dead2lighting(vec3 GLF_dead2p, vec3 GLF_dead2l, vec3 GLF_dead2rd)
{
 vec3 GLF_dead2lig = normalize(GLF_dead2l);
 vec3 GLF_dead2n = GLF_dead2normal(GLF_dead2p);
 vec3 GLF_dead2ref = reflect(GLF_dead2lig, GLF_dead2n);
 if(_GLF_DEAD(false))
  {
   _GLF_color = (vec4(-38.74, 1868.4190, 8.4, -8.7) - mix(vec4(-5768.0201, 6.8, 46.71, 593.375), vec4(-2308.1120, 4.1, -7526.3914, 0.6), bvec4(true, true, false, true)));
  }
 float GLF_dead2amb = 1.0 * clamp((GLF_dead2p.y + 0.25) * 1.2, 0.0, 1.0);
 float GLF_dead2dif = clamp(dot(GLF_dead2n, GLF_dead2lig), 0.0, 1.0);
 float GLF_dead2spe = pow(clamp(dot(GLF_dead2ref, GLF_dead2rd), 0.0, 1.0), 52.0);
 vec3 GLF_dead2lin = vec3(0);
 GLF_dead2lin += GLF_dead2amb;
 GLF_dead2lin += GLF_dead2dif * vec3(.3, .27, .25);
 GLF_dead2lin += 2.0 * GLF_dead2spe * vec3(1, .97, .1) * GLF_dead2dif;
 return GLF_dead2lin;
}
mat3 GLF_dead2camera(vec3 GLF_dead2e, vec3 GLF_dead2la)
{
 vec3 GLF_dead2roll = vec3(0, 1, 0);
 {
  if(_GLF_DEAD(false))
   {
    _GLF_color = vec4(1.4, -2.6, 640.528, 4187.6041);
   }
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(7790.0629, 81.79, 0.1, 19.70);
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 vec3 GLF_dead2f = normalize(GLF_dead2la - GLF_dead2e);
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(-1294.9837, 143.810, 684.775, -173.723);
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = (vec4(3.6, 32.94, 8995.6066, 810.027) - vec4(3259.1591, -423.289, -3426.6457, 548.774));
  }
 vec3 GLF_dead2r = normalize(cross(GLF_dead2roll, GLF_dead2f));
 vec3 GLF_dead2u = normalize(cross(GLF_dead2f, GLF_dead2r));
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(1634.5263, -817.103, -5.4, 562.924);
  }
 return mat3(GLF_dead2r, GLF_dead2u, GLF_dead2f);
}
vec2 GLF_dead4rand2(vec2 GLF_dead4seed)
{
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(-1.5, 6.9, -1.6, 166.455);
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= tan(0.0)))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 return vec2(fract(sin(dot(GLF_dead4seed.xy, vec2(12.9898, 78.233))) * 43758.5453), fract(cos(dot(GLF_dead4seed.xy, vec2(4.898, 7.23))) * 23421.631));
}
vec2 GLF_dead4noise2(vec2 GLF_dead4uv)
{
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = max(vec4(1.7, -7.1, 5.8, 57.53), vec4(-1186.6698, 2506.6697, 8.6, 4.9));
  if(_GLF_DEAD(false))
   {
    _GLF_color = vec4(211.179, -52.90, -0.6, 1342.4744);
   }
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(-7135.9809, 2.4, 371.622, -6.0);
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 vec2 GLF_dead4e = vec2(1., 0.);
 {
  if(_GLF_DEAD(false))
   {
    _GLF_color = ((true ? ceil(-59.67) : -5582.1459) - vec4(16.01, -4.7, -2.3, 100.135));
   }
  vec4 _GLF_outVarBackup_GLF_color;
  if(_GLF_DEAD(false))
   {
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(71.82, -5632.4923, -3.2, -84.08);
     }
    _GLF_color = vec4(-6.4, 5.4, 8406.7304, -276.432);
   }
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(-1.3, 151.644, 9.5, 7.5);
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
     {
      _GLF_color = faceforward(vec4(-4.4, 3697.3518, -5085.1533, -66.67), vec4(-722.482, 4.7, 4971.5669, 12.33), vec4(4.5, 5.7, 5.0, 273.601));
     }
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
     _GLF_color = vec4(1990.9268, -17.33, -9545.1143, 3.6);
    }
   _GLF_color = (vec2(-14.80, -946.421) * (- mat4x2(-97.60, 8713.8004, -9079.6921, 325.287, 2.0, 4.5, -148.253, 9849.6307)));
  }
 vec2 GLF_dead4i = floor(GLF_dead4uv);
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < abs(0.0)))))
  {
   _GLF_color = vec4(3.8, 4.4, 9868.1226, -8.9);
  }
 vec2 GLF_dead4t = fract(GLF_dead4uv);
 GLF_dead4t = GLF_dead4t * GLF_dead4t * (3. - 2. * GLF_dead4t);
 vec2 GLF_dead4r00 = GLF_dead4rand2((GLF_dead4i + GLF_dead4e.yy) * .0254);
 vec2 GLF_dead4r10 = GLF_dead4rand2((GLF_dead4i + GLF_dead4e.xy) * .0254);
 vec2 GLF_dead4r01 = GLF_dead4rand2((GLF_dead4i + GLF_dead4e.yx) * .0254);
 if(_GLF_DEAD(false))
  {
   _GLF_color = atan(acos(vec4(-13.31, -168.999, -346.317, 9.5)));
  }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  if(_GLF_DEAD(false))
   {
    if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
     {
      _GLF_color = (mat3x4(-12.87, 3584.9576, -7876.6815, 6.4, -211.589, 8050.1247, 77.73, 221.411, -0.3, -3.1, -1.3, 9.8) * log2(vec3(6.4, -3.1, 46.05)));
     }
    _GLF_color = vec4(35.64, 1.4, 8.8, 9.2);
   }
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(284.618, 32.37, 18.11, 4721.2972);
  if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
   {
    _GLF_color = vec4(-86.02, -8.2, -110.574, -730.011);
   }
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
     {
      _GLF_color = vec4(4732.6289, -1.6, 6875.5405, 8126.4984);
     }
   }
 }
 vec2 GLF_dead4r11 = GLF_dead4rand2((GLF_dead4i + GLF_dead4e.xx) * .0254);
 return mix(mix(GLF_dead4r00, GLF_dead4r10, GLF_dead4t.x), mix(GLF_dead4r01, GLF_dead4r11, GLF_dead4t.x), GLF_dead4t.y);
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = exp2(vec4(-12.11, -561.096, 948.636, -7.3));
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-26.76, -848.565, 60.13, -5.2);
  }
}
float GLF_dead4noise(vec2 GLF_dead4uv)
{
 if(_GLF_DEAD(false))
  {
   _GLF_color = refract(vec4(-3.1, 25.01, -944.538, 8.6), refract(vec4(-537.202, 9.2, 8493.0692, 7807.5122), vec4(-307.976, -8.1, 8.4, 0.1), -683.348), -1.8);
  }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = log2(vec4(31.70, -49.61, -3125.9074, 7.2));
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = atan(vec4(-992.887, 4570.7324, 21.74, 667.136));
    }
   _GLF_color = vec4(9128.1232, 59.05, -7331.9609, -3.2);
  }
 return GLF_dead4noise2(GLF_dead4uv).x;
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
   {
    _GLF_color = vec4(-2.7, 54.32, -1.8, 4.1);
   }
  _GLF_color = vec4(2.4, -5948.2893, -1200.0170, -11.70);
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(-2908.2120, 8.1, -6.5, -6646.4021);
     }
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
  if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
   {
    _GLF_color = vec4(5.1, 45.80, 97.27, 506.821);
   }
 }
}
float GLF_dead4smin(float GLF_dead4a, float GLF_dead4b, float GLF_dead4k)
{
 float GLF_dead4h = max(GLF_dead4k - abs(GLF_dead4a - GLF_dead4b), 0.0) / GLF_dead4k;
 return min(GLF_dead4a, GLF_dead4b) - GLF_dead4h * GLF_dead4h * GLF_dead4k * (1.0 / 4.0);
}
struct StripesOpt {
 float distorsion;
 float spacing;
 float bump;
} ;

float GLF_dead4stripes(vec2 GLF_dead4uv, StripesOpt GLF_dead4opt)
{
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(3.7, -453.029, -8.0, 2671.5174);
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
  if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
   {
    _GLF_color = vec4(-2.6, -8.5, -1.0, 1498.7521);
   }
 }
 if(_GLF_DEAD(false))
  {
   _GLF_color = inversesqrt(vec4(0.7, 3.9, -2692.0380, -2058.9901));
  }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = mat3x4(503.878, -851.211, -4560.1540, 24.39, -440.012, 78.82, -4228.3448, -6.0, -2.2, 6.9, -7286.9765, -261.059)[0];
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 vec2 GLF_dead4ouv = GLF_dead4uv;
 float GLF_dead4s = 10.;
 float GLF_dead4iter = floor(GLF_dead4uv.x * GLF_dead4s + .25);
 GLF_dead4uv.x = mod(GLF_dead4uv.x, 1. / 10.) - 1. / 10. / 2.;
 vec2 GLF_dead4r = GLF_dead4rand2(vec2(GLF_dead4iter * .0234, GLF_dead4iter * 0.8913));
 float GLF_dead4ax = mix(- 1., 1., GLF_dead4r.x) * .05 * GLF_dead4opt.distorsion;
 float GLF_dead4d = sin(2. * 3.14159265 * (GLF_dead4uv.x + GLF_dead4uv.y * GLF_dead4ax) * 10.);
 GLF_dead4d += mix(- .5 + GLF_dead4opt.spacing, .5 + GLF_dead4opt.spacing, GLF_dead4r.x);
 GLF_dead4d *= .03;
 float GLF_dead4sides = .47 - abs(GLF_dead4uv.y);
 float GLF_dead4nobump = (1. - step(.5, GLF_dead4opt.bump)) * 99999.;
 GLF_dead4uv = GLF_dead4ouv;
 GLF_dead4s = 2.;
 GLF_dead4uv.x = mod(GLF_dead4uv.x, GLF_dead4s) - GLF_dead4s / 2.;
 GLF_dead4sides = min(GLF_dead4sides, length(GLF_dead4uv - vec2(0., .9)) - 0.6 + GLF_dead4nobump);
 GLF_dead4sides = min(GLF_dead4sides, length(GLF_dead4uv - vec2(0.5, - .85)) - 0.55 + GLF_dead4nobump);
 GLF_dead4d = GLF_dead4smin(GLF_dead4d, GLF_dead4sides, mix(0.10, 0.05, GLF_dead4r.y));
 return GLF_dead4d;
}
float GLF_dead4fill(float GLF_dead4d)
{
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-689.353, -57.97, 7.9, -6081.1990);
  }
 return smoothstep(0., .003, GLF_dead4d);
}
float GLF_dead4fit01(float GLF_dead4a, float GLF_dead4b, float GLF_dead4x)
{
 return (clamp(GLF_dead4x, GLF_dead4a, GLF_dead4b) - GLF_dead4a) / (GLF_dead4b - GLF_dead4a);
}
float GLF_dead4circle(vec2 GLF_dead4uv, float GLF_dead4r)
{
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = (vec4(-1.9, -19.67, -1.7, -3576.1988) * 10.87);
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
  if(_GLF_DEAD(false))
   {
    _GLF_color = sqrt((vec4(4.1, 70.13, 5.9, 7.6) * vec4(-8.9, -24.76, 4530.2570, -7871.8589)));
   }
  {
   vec4 _GLF_outVarBackup_GLF_color;
   _GLF_outVarBackup_GLF_color = _GLF_color;
   _GLF_color = max((vec4(-964.781, 953.810, -247.786, -0.0) + -7103.4849), vec4(9.9, -1.2, -547.118, 6118.7685));
   if(_GLF_WRAPPED_IF_TRUE(true))
    {
     if(_GLF_DEAD(false))
      {
       _GLF_color = (9044.4354 + vec4(9.9, -9.9, 8.2, 9147.8024));
      }
     _GLF_color = _GLF_outVarBackup_GLF_color;
    }
  }
 }
 return - (length(GLF_dead4uv) - GLF_dead4r);
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   _GLF_color = vec4(-7.4, -4.0, 7.7, -37.55);
  }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = (vec4(-92.22, -7.4, -480.771, 651.403));
  if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(true, ! (! (true)))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
}
float GLF_dead1sdCross(vec3 GLF_dead1p)
{
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(593.505, 822.092, 278.909, -367.469);
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = smoothstep(vec4(-6.5, 469.451, 6.2, -7.0), (min(vec4(7.3, 5.0, 99.47, 16.78), vec4(-43.52, 3.7, 3.6, -640.342)) * vec4(-5013.5871, 89.81, 345.611, 408.551)), vec4(-2.5, -495.320, -9.1, -47.54));
    }
   vec4 _GLF_outVarBackup_GLF_color;
   _GLF_outVarBackup_GLF_color = _GLF_color;
   _GLF_color = intBitsToFloat((ivec4(-69607, -34612, -10431, 21666) % -88321));
   if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
    {
     _GLF_color = _GLF_outVarBackup_GLF_color;
    }
  }
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
  if(_GLF_DEAD(false))
   {
    _GLF_color = (vec3(8.0, -4.8, 7.4) * mat4x3(-7.2, -1.9, -81.00, -10.56, -1.3, 358.383, 246.760, 1.1, 91.73, -902.643, 239.665, 7888.8350));
   }
  if(_GLF_DEAD(false))
   {
    _GLF_color = step(vec4(-701.252, 923.429, 4.1, 6.2), vec4(182.237, -8007.5401, 5283.0370, 32.38));
   }
 }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  {
   vec4 _GLF_outVarBackup_GLF_color;
   _GLF_outVarBackup_GLF_color = _GLF_color;
   _GLF_color = vec4(2121.7472, -67.20, 8.7, 3.6);
   if(_GLF_DEAD(false))
    {
     _GLF_color = (mat3x4(1.2, 6.8, -37.77, -9798.1530, 92.76, -8.9, -16.91, 55.68, 8.5, 32.33, -445.674, 683.686) * vec3(937.995, 8.4, -712.702));
    }
   if(_GLF_WRAPPED_IF_TRUE(true))
    {
     _GLF_color = _GLF_outVarBackup_GLF_color;
    }
  }
  _GLF_color = (35.90 / vec4(1.2, 0.6, -5.4, -6853.9893));
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 if(_GLF_DEAD(false))
  {
   _GLF_color = uintBitsToFloat(uvec4(172217u, 139198u, 55721u, 190950u));
  }
 GLF_dead1p = abs(GLF_dead1p);
 vec3 GLF_dead1d = vec3(max(GLF_dead1p.x, GLF_dead1p.y + 0.07), max(GLF_dead1p.y, GLF_dead1p.z), max(GLF_dead1p.z, GLF_dead1p.x));
 return min(GLF_dead1d.x, min(GLF_dead1d.y, GLF_dead1d.z)) - (1.0 / 2.23);
}
float GLF_dead1sdCrossRep(vec3 GLF_dead1p)
{
 vec3 GLF_dead1q = mod(GLF_dead1p + 1.0, 2.0) - 1.0;
 return GLF_dead1sdCross(GLF_dead1q);
}
float GLF_dead1sdCrossRepScale(vec3 GLF_dead1p, float GLF_dead1s)
{
 return GLF_dead1sdCrossRep(GLF_dead1p * GLF_dead1s) / GLF_dead1s;
 if(_GLF_DEAD(false))
  {
   _GLF_color = sin(vec4(9.0, -87.35, 8.1, 1.4));
  }
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-8.4, -1645.0197, -66.60, 87.22);
    }
   _GLF_color = mix((-87.48 / vec4(-707.758, 548.726, 5.7, 8.4)), vec4(-4.2, -984.128, -24.69, 1.4), -5.1);
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = (mat3x4(5.3, 0.6, 915.530, 1.5, -117.191, -2.5, -2.1, -81.93, 0.3, 825.552, 989.097, 4013.5399) * refract(vec3(-5.8, -87.29, -0.0), vec3(48.01, 761.088, 7324.7057), -512.222));
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
  }
}
vec3 pal(in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d)
{
 return a + b * cos(6.28318 * (c * t + d));
}
vec3 spectrum(float n)
{
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-730.287, -41.41, 2.1, 349.784);
  }
 return pal(n, vec3(0.5, 0.5, 0.5), vec3(0.0, 0.5, 0.5), vec3(.0, 1.0, .0), vec3(0.62, 0.33, 0.37));
}
float sdSphere(vec3 p, float s)
{
 return length(p) - s;
}
float sdUnion_s(float a, float b, float k)
{
 float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
 return mix(b, a, h) - k * h * (1.0 - h);
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   vec3 donor_replacementGLF_dead2l = _GLF_FUZZED(vec3(20.70, 4986.7610, 16.49));
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(2.4, -9.2, -62.90, -2851.2004);
     if(_GLF_DEAD(false))
      {
       _GLF_color = mod(vec4(80.16, 63.09, -993.176, -5896.1898), intBitsToFloat(ivec4(29884, 60242, -30080, -866)));
      }
    }
   vec3 donor_replacementGLF_dead2p = _GLF_FUZZED(vec3(2.9, -43.76, 34.19));
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     _GLF_color = vec4(67.42, 2451.1789, 3.5, -380.678);
    }
   vec3 donor_replacementGLF_dead2rd = _GLF_FUZZED((mat2x3(7713.5249, -5.4, 6.8, 9.7, 7.5, -12.73) * injectionSwitch));
   {
    vec3 GLF_dead2lig = normalize(donor_replacementGLF_dead2l);
    vec3 GLF_dead2n = GLF_dead2normal(donor_replacementGLF_dead2p);
    vec3 GLF_dead2ref = reflect(GLF_dead2lig, GLF_dead2n);
    float GLF_dead2amb = 1.0 * clamp((donor_replacementGLF_dead2p.y + 0.25) * 1.2, 0.0, 1.0);
    float GLF_dead2dif = clamp(dot(GLF_dead2n, GLF_dead2lig), 0.0, 1.0);
    float GLF_dead2spe = pow(clamp(dot(GLF_dead2ref, donor_replacementGLF_dead2rd), 0.0, 1.0), 52.0);
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = vec4(-689.649, 6137.5733, 89.57, -581.984);
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(vec3(-92.19, 2762.5532, -9339.5579), 1.3);
     }
    vec3 GLF_dead2lin = vec3(0);
    GLF_dead2lin += GLF_dead2amb;
    GLF_dead2lin += GLF_dead2dif * vec3(.3, .27, .25);
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(362.034, -80.15, 9267.7112, 0.2);
     }
    GLF_dead2lin += 2.0 * GLF_dead2spe * vec3(1, .97, .1) * GLF_dead2dif;
    GLF_dead2lin;
   }
  }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(8125.9505, 7.5, -6493.5789, 40.28);
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 if(_GLF_DEAD(false))
  {
   _GLF_color = fract(vec4(9.3, -201.998, 9.0, 880.242));
  }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  {
   vec4 _GLF_outVarBackup_GLF_color;
   _GLF_outVarBackup_GLF_color = _GLF_color;
   _GLF_color = step((265.735), exp2(vec4(7.1, 7.0, 86.69, 10.18)));
   if(_GLF_WRAPPED_IF_TRUE(true))
    {
     _GLF_color = _GLF_outVarBackup_GLF_color;
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      {
       _GLF_color = vec4(4814.7018, -2079.7008, 7.5, 2.2);
      }
    }
  }
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = (mat2x4(-74.88, 4133.1884, -22.57, -52.16, -237.595, 9.1, 10.58, -589.312) * vec2(586.031, -759.262));
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
}
vec3 carToPol(vec3 p)
{
 float r = length(p);
 float the = acos(p.z / r);
 if(_GLF_DEAD(_GLF_IDENTITY(false, (_GLF_FALSE(false, (gl_FragCoord.x < 0.0)) ? _GLF_FUZZED(true) : false))))
  {
   {
    if(_GLF_DEAD(false))
     {
      _GLF_color = exp2(step(vec4(176.517, 56.67, -0.2, -80.06), vec4(-19.65, 2990.4308, -78.67, -4338.9694)));
     }
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
     {
      _GLF_color = vec4(0.3, -7.6, 918.511, 60.44);
     }
    _GLF_color = vec4(362.536, 9.4, -4.7, 3.4);
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
    {
     vec4 _GLF_outVarBackup_GLF_color;
     if(_GLF_DEAD(false))
      {
       _GLF_color = (ceil(vec4(2.3, 79.67, 5.4, 1155.5886)) + -5951.4057);
      }
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = atan(vec4(7766.3965, 6.0, -37.27, 8076.5088));
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(2270.3634, -1.3, 3318.0082, -6.1);
      }
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
   }
   _GLF_color = vec4(-261.444, -6.9, -898.370, 5.2);
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-782.082, -1873.2740, -28.30, -1.1);
  }
 float phi = atan(p.y, p.x);
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = mod(vec4(71.91, 79.94, -863.604, -1.3), vec4(138.321, 1076.1882, -1700.2387, 541.708));
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    {
     vec4 _GLF_outVarBackup_GLF_color;
     if(_GLF_DEAD(false))
      {
       _GLF_color = mix(vec4(-4263.7394, -4561.3948, -5644.0666, 4478.1052), vec4(9.1, 0.1, -2.1, 3066.6636), bvec4(false, false, true, true));
      }
     if(_GLF_DEAD(false))
      {
       _GLF_color = sin(vec4(-73.82, 1602.7742, 202.111, -377.649));
      }
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = (vec2(-2.0, 661.414) * mat4x2(766.046, -8.4, 968.097, -2.0, 9.3, 519.552, -5338.5994, 8533.1052));
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       if(_GLF_DEAD(false))
        {
         if(_GLF_DEAD(false))
          {
           _GLF_color = vec4(2.5, 0.3, 879.224, 7.5);
          }
         _GLF_color = vec4(-3.8, -4158.7551, 5182.7115, 5.6);
        }
       if(_GLF_DEAD(_GLF_IDENTITY(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)), (true ? _GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)) : _GLF_FUZZED(true)))))
        {
         _GLF_color = (round(vec4(1.2, 77.72, -83.77, 914.075)) / vec3(8.7, 4.7, 7809.1287)[2]);
        }
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
  if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < log(1.0)))))
   {
    _GLF_color = vec4(631.386, -3417.5513, 2.4, 4.0);
   }
 }
 return vec3(r, the, phi);
 if(_GLF_DEAD(_GLF_IDENTITY(false, (false ? _GLF_FUZZED(false) : false))))
  {
   _GLF_color = (- mat4(-6.5, 0.7, 6.4, -80.67, 25.60, -853.057, -33.15, 23.54, -3.8, -7.0, -7122.2531, -2.2, -25.77, 2.9, -6.3, 16.91))[1];
  }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = fract(reflect(vec4(-0.2, 4251.0881, 46.21, 232.079), vec4(-4.9, 772.537, 122.330, 8.7)));
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(9.8, 0.7, 13.11, -5.5);
     }
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
}
mat3 rotationXY(vec2 angle)
{
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-138.888, 996.886, fract(vec2(-5154.4072, -7.4)));
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = vec4(1.2, 51.30, 5302.0956, 9744.1129);
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
  }
 {
  if(_GLF_DEAD(false))
   {
    _GLF_color = vec4(-2386.5629, -28.23, 530.799, -1.9);
   }
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  {
   vec4 _GLF_outVarBackup_GLF_color;
   _GLF_outVarBackup_GLF_color = _GLF_color;
   _GLF_color = vec4(43.28, 37.01, 7.4, 6.9);
   if(_GLF_WRAPPED_IF_TRUE(true))
    {
     _GLF_color = _GLF_outVarBackup_GLF_color;
    }
  }
  _GLF_color = (- log2(vec4(-8385.0520, -86.60, 189.244, -3.1)));
  if(_GLF_DEAD(false))
   {
    _GLF_color = (vec4(-4.9, 6.5, 344.120, -66.05) - mat2x4(44.06, 998.291, -164.227, 4343.4521, 1.5, -21.47, -3296.7382, 3554.7984)[1]);
   }
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(-0.5, -2.1, 0.6, 7.4);
     }
    _GLF_color = _GLF_outVarBackup_GLF_color;
    if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
     {
      _GLF_color = vec4(-456.596, -390.222, -133.280, 46.96);
     }
   }
 }
 vec2 c = cos(angle);
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(9175.5699, 4832.1947, -0.2, -81.86);
    }
   vec3 donor_replacementGLF_dead3p = _GLF_FUZZED(vec3(3.5, -2.9, 5069.8235));
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = max(vec4(vec2(3624.2269, -27.56), vec2(6.5, -0.1)), step((-320.000 / -339.089), 6006.6426));
    if(_GLF_DEAD(false))
     {
      _GLF_color = tan((mat3x4(-5.0, -2.0, 7.7, -4.8, 8.1, 967.202, 483.684, 70.83, 6.3, -855.399, 976.940, 23.47) * vec3(997.679, 61.39, 7860.2777)));
     }
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   {
    float GLF_dead3r = length(donor_replacementGLF_dead3p);
    float GLF_dead3the = acos(donor_replacementGLF_dead3p.z / GLF_dead3r);
    float GLF_dead3phi = atan(donor_replacementGLF_dead3p.y, donor_replacementGLF_dead3p.x);
    vec3(GLF_dead3r, GLF_dead3the, GLF_dead3phi);
   }
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = vec4(5.5, -46.72, -1.3, -91.30);
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
  }
 vec2 s = sin(angle);
 if(_GLF_DEAD(false))
  {
   _GLF_color = roundEven(vec4(2.4, 56.14, 64.77, -1.2));
  }
 return mat3(c.y, 0.0, - s.y, s.y * s.x, c.x, c.y * s.x, s.y * c.x, - s.x, c.y * c.x);
}
float sdVerticalCapsule(vec3 p, float h, float r)
{
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = sqrt((3.1 / vec4(-6210.9668, 5.8, 0.0, 9.0)));
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 p.z -= clamp(p.z, 0.0, h);
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
   {
    _GLF_color = vec4(-1.4, vec2(-6.9, 5.0), -1084.0688);
   }
  _GLF_color = vec4(-339.930, -539.936, 2492.5450, 5.5);
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
  if(_GLF_DEAD(false))
   {
    _GLF_color = vec4(227.065, 1.0, -9807.4495, 0.0);
   }
 }
 return length(p) - r;
}
float distortedCapsule(vec3 p)
{
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(-8.6, -1850.4301, -248.921, -5.1);
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 float dtime = 1.3 * p.z - 2.0 * iTime - 1.;
 float dt = sin((dtime) - 0.8 * sin(dtime));
 if(_GLF_DEAD(false))
  {
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = vec4(-91.65, 223.479, 4.2, -7485.5096);
    if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
     {
      _GLF_color = vec2(166.122, -0.5).rgrg;
     }
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   _GLF_color = vec4(-8.2, -8634.7521, -8.4, 9.1);
  }
 p.x += 0.2 * (p.z) * dt;
 float d = sdVerticalCapsule(p - vec3(0.5, 0, 0.1), 2.0, 0.05 * (4.0 - 1.5 * p.z));
 if(_GLF_DEAD(false))
  {
   _GLF_color = (7050.8383 + min(vec4(610.023, 71.62, 7315.9777, -745.487), 9196.6903));
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   _GLF_color = (vec4(8.3, -4.7, -4.0, -0.9) * mat4(8.4, 429.956, 7.4, -211.111, -2571.6068, -64.61, -1395.0745, 3728.7375, 7.2, 1.6, -2641.9345, 5117.6242, 736.749, -56.52, -81.16, -48.49));
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = (82.88 / vec4(3082.4862, -675.229, 279.257, 9.2));
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     _GLF_color = mat4(8.4, 5.0, -1.8, -9.7, -995.399, -1228.8740, -180.004, -3.8, -121.701, -303.034, -4168.1300, 4338.2955, 5.1, 142.374, -3.2, -542.640)[1];
    }
  }
 {
  if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
   {
    _GLF_color = vec4(137.269, 3279.3643, 6.3, 300.134);
   }
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(-4531.4592, -51.14, 8.9, -1.5);
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
   {
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = vec4(-68.06, 88.31, 434.977, 67.91);
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(5.1, 9.9, -7.6, -9139.3720);
        }
      }
    }
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 float d2 = sdSphere(p - vec3(0.5, 0, 2.2), 0.2);
 d = sdUnion_s(d, d2, 0.1);
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = vec4(-348.834, 6.2, 195.740, -6261.0414);
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   _GLF_color = vec4(-92.58, 8.1, -9.1, 88.85);
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   _GLF_color = exp(vec4(8333.8841, -544.765, 58.94, -0.1));
  }
 return d;
 if(_GLF_DEAD(false))
  {
   _GLF_color = ((+ vec4(78.75, -5.6, -4.6, -61.95)) / 5.3);
  }
 if(_GLF_DEAD(false))
  {
   {
    if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
     {
      _GLF_color = clamp(vec4(76.31, -5.9, 980.537, -41.70), -9.9, -314.584);
     }
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = step(vec4(-258.626, -2.6, -0.8, 5.0), vec4(-311.929, 9.2, 42.88, -9.1));
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   _GLF_color = asin(vec4(-9.5, -58.58, -0.4, 4.7));
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(803.819, -7.9, 13.97, -5039.3859);
    }
  }
}
float map(vec3 p)
{
 float dt = sin((2.0 * iTime + 2.5) - 0.8 * sin(2.0 * iTime + 2.5));
 {
  {
   vec4 _GLF_outVarBackup_GLF_color;
   _GLF_outVarBackup_GLF_color = _GLF_color;
   _GLF_color = mat4(0.0, -2.0, 4347.3799, -208.325, -574.700, -9759.4349, 7791.0565, -9.7, 829.221, 5.6, 8.6, 6.4, 478.322, -5.7, 11.55, -86.20)[1];
   if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
    {
     _GLF_color = _GLF_outVarBackup_GLF_color;
    }
  }
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(-75.18, -3826.3340, 349.348, 567.507);
  if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
   {
    _GLF_color = vec4(23.91, -2.0, 2.6, 6.9);
   }
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
  {
   vec4 _GLF_outVarBackup_GLF_color;
   _GLF_outVarBackup_GLF_color = _GLF_color;
   if(_GLF_DEAD(false))
    {
     _GLF_color = smoothstep(vec2(1727.3889, -5.2), vec2(-674.781, 0.0), vec2(-2.7, 3.7)).yyxx;
    }
   _GLF_color = round(vec4(-218.508, -171.061, -7.8, 5.4));
   if(_GLF_WRAPPED_IF_TRUE(true))
    {
     _GLF_color = _GLF_outVarBackup_GLF_color;
    }
  }
  if(_GLF_DEAD(_GLF_IDENTITY(false, false || (false))))
   {
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
     {
      _GLF_color = atan(vec4(-398.564, 9.8, -634.077, -2634.3731), vec4(-2.8, -79.08, -9492.2644, -5.8));
     }
    _GLF_color = vec4(-85.47, -5.0, 54.23, 5715.8588);
   }
 }
 p.x += 0.2 * dt;
 float d0 = sdSphere(p - vec3(0.2, 0, 0), 0.4);
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   _GLF_color = vec4(9.9, -8.8, 43.25, 3516.2808);
  }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
   {
    _GLF_color = vec3(6542.0381, 5482.9270, 5.7).xzxx;
   }
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = mix(vec4(983.079, 418.191, 61.26, 8.3), vec4(26.70, 93.13, -764.636, -5.5), -30.29);
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
  {
   vec4 _GLF_outVarBackup_GLF_color;
   _GLF_outVarBackup_GLF_color = _GLF_color;
   _GLF_color = clamp(vec4(0.8, -4024.6568, 3.7, -5.0), 3261.7492, 17.81);
   if(_GLF_WRAPPED_IF_TRUE(true))
    {
     _GLF_color = _GLF_outVarBackup_GLF_color;
     if(_GLF_DEAD(false))
      {
       _GLF_color = (- vec4(-1.3, 654.464, 2.4, -1.6));
      }
    }
  }
 }
 float d2;
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = vec4(-5747.3975, 8.8, 8.0, -4.4);
    if(_GLF_DEAD(_GLF_IDENTITY(false, true && (false))))
     {
      _GLF_color = sign(vec4(-234.863, -4647.5908, -24.68, -4.5));
     }
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   if(_GLF_DEAD(false))
    {
     _GLF_color = min(atan(vec4(-2.2, 8.9, 3.6, -3885.2879)), 8.7);
    }
   _GLF_color = vec4(3.2, 6.9, -1.1, 7502.2032);
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      {
       _GLF_color = vec4(-970.128, -32.63, 7.4, 1.5);
      }
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = (vec4(1821.6613, -109.289, 0.8, 6.6) * vec4(2526.4402, -1518.4588, -0.1, 11.51));
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     _GLF_color = vec4(-67.32, -697.225, 833.061, -86.14);
    }
  }
 vec3 p1;
 for(
     float i = 0.;
     i < 9.;
     i ++
 )
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = log(vec4(-9966.8468, 7.2, -7667.5450, 548.797));
    }
   p1 = rotationXY(vec2(i * 2. * 3.14159265359 / 9., 0.8)) * p;
   if(_GLF_DEAD(false))
    {
     _GLF_color = log(vec4(7542.4879, -8.3, 1.0, -4772.6367));
    }
   d2 = distortedCapsule(p1);
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = vec4(-1005.3989, 7.7, 1.2, 9928.2704);
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-22.08, 8.0, -90.36, 8.7);
    }
   d0 = sdUnion_s(d0, d2, 0.2);
   if(_GLF_DEAD(false))
    {
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = vec4(-99.79, -9886.6523, -531.510, 5784.3860);
       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= tan(0.0)))))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
      if(_GLF_DEAD(false))
       {
        _GLF_color = ceil(vec4(-9.7, 531.662, 9720.1780, 1.6));
       }
      _GLF_color = (vec2(4380.2842, -738.203) * mat4x2(-86.55, 673.729, 7625.9858, 4.3, -327.961, 6.2, 4669.7921, -8.1));
      if(_GLF_DEAD(false))
       {
        _GLF_color = (vec4(5902.6862, 7.3, -18.44, 382.194));
       }
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     _GLF_color = vec3(6.0, 10.52, 2.2).yzzx;
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        {
         vec4 donor_replacementGLF_dead2fragColor = _GLF_FUZZED(vec4(time, iTime, exp2(unpackUnorm2x16(8004u))));
         vec2 donor_replacementGLF_dead2fragCoord = _GLF_FUZZED(vec2(41.80, 541.377));
         {
          vec4 _GLF_outVarBackup_GLF_color;
          _GLF_outVarBackup_GLF_color = _GLF_color;
          if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
           {
            _GLF_color = vec4(1.8, 570.283, -662.231, 5346.9607);
           }
          _GLF_color = vec4(-24.18, 248.512, 5452.0214, 74.04);
          {
           vec4 _GLF_outVarBackup_GLF_color;
           _GLF_outVarBackup_GLF_color = _GLF_color;
           if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
            {
             _GLF_color = fract(vec4(1.5, 303.603, -7168.9806, 5560.2848));
            }
           _GLF_color = vec4(-5.6, -7.7, -561.147, 3.9);
           if(_GLF_WRAPPED_IF_TRUE(true))
            {
             _GLF_color = _GLF_outVarBackup_GLF_color;
            }
          }
          if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
           {
            {
             vec4 _GLF_outVarBackup_GLF_color;
             if(_GLF_DEAD(false))
              {
               _GLF_color = vec4(15.51, -9752.2575, 0.8, 784.818);
              }
             _GLF_outVarBackup_GLF_color = _GLF_color;
             _GLF_color = vec4(987.856, 4.7, -4061.8414, -5780.7569);
             if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
              {
               _GLF_color = _GLF_outVarBackup_GLF_color;
              }
            }
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
         }
         float donor_replacementGLF_dead2time = _GLF_FUZZED(dt);
         {
          vec2 GLF_dead2uv = - 1.0 + 2.0 * (donor_replacementGLF_dead2fragCoord / resolution.xy);
          GLF_dead2uv.x *= resolution.x / resolution.y;
          vec3 GLF_dead2ro = 5.0 * vec3(cos(donor_replacementGLF_dead2time * 0.3), 1.0, - sin(donor_replacementGLF_dead2time * 0.3));
          vec3 GLF_dead2rd = GLF_dead2camera(GLF_dead2ro, vec3(0)) * normalize(vec3(GLF_dead2uv, 2.0));
          vec3 GLF_dead2l = vec3(- 3.0, 4.0, 0.0);
          vec3 GLF_dead2col = vec3(0);
          {
           vec4 _GLF_outVarBackup_GLF_color;
           {
            vec4 _GLF_outVarBackup_GLF_color;
            _GLF_outVarBackup_GLF_color = _GLF_color;
            _GLF_color = mat4(-15.39, -3.8, 64.91, -654.574, -2.3, 2.5, -838.758, -8507.6502, 671.451, 172.284, -66.37, 6.5, -40.49, -79.44, 84.48, 425.176)[0];
            if(_GLF_DEAD(false))
             {
              _GLF_color = vec4(-0.9, 72.48, 911.616, 8280.1408);
             }
            if(_GLF_WRAPPED_IF_TRUE(true))
             {
              _GLF_color = _GLF_outVarBackup_GLF_color;
             }
            if(_GLF_DEAD(false))
             {
              _GLF_color = cos(vec4(-564.797, -1903.9740, -34.73, -1384.0815));
             }
           }
           _GLF_outVarBackup_GLF_color = _GLF_color;
           _GLF_color = vec4(-564.987, 74.36, -1.2, -10.44);
           if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
            {
             _GLF_color = _GLF_outVarBackup_GLF_color;
             {
              if(_GLF_DEAD(false))
               {
                if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                 {
                  _GLF_color = vec4(5392.6706, -3011.3178, -3595.9718, -986.647);
                 }
                _GLF_color = vec4(533.277, -6.2, -4362.1687, -514.688);
               }
              vec4 _GLF_outVarBackup_GLF_color;
              if(_GLF_DEAD(false))
               {
                _GLF_color = (vec4(-86.82, 1453.7057, 7656.8310, 33.73) - -48.98);
               }
              _GLF_outVarBackup_GLF_color = _GLF_color;
              _GLF_color = (min(vec4(1427.8771, 53.14, -226.442, -5.7), -329.729) * sin(26.54));
              if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
               {
                _GLF_color = _GLF_outVarBackup_GLF_color;
               }
             }
            }
          }
          vec2 GLF_dead2i = GLF_dead2intersect(GLF_dead2ro, GLF_dead2rd);
          if(GLF_dead2i.y > - 1.0)
           {
            vec3 GLF_dead2p = GLF_dead2ro + GLF_dead2rd * GLF_dead2i.x;
            GLF_dead2col = mix(vec3(.0, .75, .75), vec3(.74, 0, .75), abs(cos(GLF_dead2i.y)));
            GLF_dead2col *= GLF_dead2lighting(GLF_dead2p, GLF_dead2l, GLF_dead2rd);
           }
          {
           vec4 _GLF_outVarBackup_GLF_color;
           _GLF_outVarBackup_GLF_color = _GLF_color;
           if(_GLF_DEAD(false))
            {
             _GLF_color = (vec2(-8.3, 34.84) * mat4x2(2.4, 38.85, -24.44, 9.6, 89.19, -547.824, 5.6, 1.3));
            }
           _GLF_color = vec4(vec2(9018.7592, 7165.3046), vec2(8089.4855, -43.53));
           if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
            {
             if(_GLF_DEAD(false))
              {
               _GLF_color = vec4(-9.7, -9.4, -55.71, -11.18);
              }
             _GLF_color = _GLF_outVarBackup_GLF_color;
            }
           if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
            {
             _GLF_color = vec4(9.4, 6.4, 26.05, 7.8);
            }
          }
          if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
           {
            _GLF_color = (vec4(521.137, 77.84, -2.0, -0.5) / vec4(-2.6, -9.9, -42.75, 629.648));
           }
          donor_replacementGLF_dead2fragColor = vec4(GLF_dead2col, 1.0);
         }
        }
       _GLF_color = vec4(-72.77, 785.137, -414.534, -3.1);
      }
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-6.0, ceil(vec3(78.04, -1.0, -983.053)));
    }
  }
 return d0;
}
vec3 gradient(vec3 pos)
{
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(57.98, 1.1, -2.0, -21.15);
  }
 const vec3 dx = vec3(0.01, 0.0, 0.0);
 const vec3 dy = vec3(0.0, 0.01, 0.0);
 if(_GLF_DEAD(false))
  {
   _GLF_color = acos(vec4(1623.4701, -95.84, -5.8, -7.2));
  }
 {
  if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
   {
    _GLF_color = ((-587.178 + -2856.7150) - min(vec4(5.5, -420.227, 23.17, -7.0), vec4(1365.4757, -942.992, -43.60, -45.59)));
   }
  vec4 _GLF_outVarBackup_GLF_color;
  if(_GLF_DEAD(false))
   {
    _GLF_color = acos(vec4(-30.25, 6201.8463, 6.2, 1.0));
   }
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(-6558.6687, 0.7, -319.879, -8.4);
  if(_GLF_DEAD(false))
   {
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(11.86, 95.21, 7902.6727, -7.9);
     }
    _GLF_color = vec4(23.78, -6742.7086, -34.00, 7094.5553);
   }
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= log(1.0)))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 if(_GLF_DEAD(_GLF_IDENTITY(false, (false) && true)))
  {
   _GLF_color = vec4(5174.0738, 3947.1852, 935.006, 6.2);
  }
 const vec3 dz = vec3(0.0, 0.0, 0.01);
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < length(length(0.0))))))
  {
   _GLF_color = (vec4(8389.2253, -5.7, 258.075, 2.8) + 917.732);
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < tan(0.0)))))
  {
   _GLF_color = vec4(-5822.0177, -43.63, 8439.1329, 79.73);
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    {
     _GLF_color = exp(vec4(52.40, 804.012, 3.4, -1.5));
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = vec4(-3.9, 602.733, 9.1, 31.02);
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
    }
  }
 return normalize(vec3(map(pos + dx) - map(pos - dx), map(pos + dy) - map(pos - dy), map(pos + dz) - map(pos - dz)));
}
vec3 fresnel(vec3 F0, vec3 h, vec3 l)
{
 if(_GLF_DEAD(false))
  {
   {
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(15.40, -674.396, -391.638, 250.353);
     }
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = mod(vec4(-36.47, 6612.7985, -7.1, 2022.9740), vec4(-320.202, 5.6, -40.52, 8.9));
    if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   float donor_replacementGLF_dead4aperture = _GLF_FUZZED(determinant(mat2(-54.31, -206.570, 3165.6493, 2142.1148)));
   float donor_replacementGLF_dead4offset = _GLF_FUZZED(log2(iTime));
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = vec4(vec2(-3.8, 5.4), -293.143, (-81.08 / 6957.3076));
    if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
     {
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
       {
        _GLF_color = vec4(vec3(958.387, -6.5, 49.56), 170.429);
       }
      _GLF_color = _GLF_outVarBackup_GLF_color;
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
       {
        _GLF_color = mat3x4((-9030.3012 - vec4(9788.8847, -1.8, 6.5, -950.536)), vec4(-33.85, 469.653, 969.082, -9.1), vec4(-980.053, 63.17, -4431.4445, 14.54))[1];
       }
     }
   }
   float donor_replacementGLF_dead4radius = _GLF_FUZZED(mix(451.112, vec2(-5.5, 9.9)[0], time));
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = vec4(3.2, -1717.8116, 673.927, 2.2);
    if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
    if(_GLF_DEAD(false))
     {
      _GLF_color = min(vec4(7.4, 32.94, -8.6, 18.27), -7.3);
     }
   }
   float donor_replacementGLF_dead4width = _GLF_FUZZED(max(time, time));
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(6464.2993, -7.6, 3.2, -75.56);
     }
    _GLF_color = vec4(-6486.1899, 6.8, 72.97, -3.8);
    if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
      if(_GLF_DEAD(false))
       {
        _GLF_color = vec4(-5453.3250, -8.3, -9349.1212, 3769.5061).xyzy;
       }
     }
   }
   {
    donor_replacementGLF_dead4offset = (donor_replacementGLF_dead4width * donor_replacementGLF_dead4width / donor_replacementGLF_dead4aperture - donor_replacementGLF_dead4aperture) / 2.;
    donor_replacementGLF_dead4radius = donor_replacementGLF_dead4offset + donor_replacementGLF_dead4aperture;
   }
  }
 return F0 + (1.0 - F0) * pow(clamp(1.0 - dot(h, l), 0.0, 1.0), 5.0);
}
vec3 selfColor(vec3 pos)
{
 vec3 pol = carToPol(pos - vec3(0.4, 0, 0));
 return spectrum(0.45 * pol.x);
}
mat3 calcLookAtMatrix(in vec3 ro, in vec3 ta, in float roll)
{
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(3.0, -98.85, 3.6, -5.1);
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
   {
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
     {
      _GLF_color = vec4(inversesqrt(6.9), vec2(9959.4493, -0.5), -4330.3396);
     }
    _GLF_color = _GLF_outVarBackup_GLF_color;
    if(_GLF_DEAD(false))
     {
      _GLF_color = (mat2x4(6.5, 89.31, 0.9, 2.7, -7.8, 9.0, -171.839, 1.1) * vec2(-54.10, 54.24));
     }
   }
 }
 vec3 ww = normalize(ta - ro);
 vec3 uu = normalize(cross(ww, vec3(sin(roll), cos(roll), 0.0)));
 vec3 vv = normalize(cross(uu, ww));
 return mat3(uu, vv, ww);
 {
  if(_GLF_DEAD(false))
   {
    vec3 donor_replacementGLF_dead5pos = _GLF_FUZZED(vec3(4.5, 335.769, 7820.4945));
    {
     {
      vec4 _GLF_outVarBackup_GLF_color;
      if(_GLF_DEAD(false))
       {
        _GLF_color = faceforward(vec4(-7.7, 89.28, 665.909, 999.446), vec4(46.07, -7698.8000, 58.16, -606.994), vec4(-35.07));
       }
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = vec4(-985.709, 18.97, 9210.4240, -0.9);
      if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
       {
        if(_GLF_DEAD(false))
         {
          _GLF_color = vec4(773.776, 0.6, -3.8, 43.14);
         }
        {
         vec4 _GLF_outVarBackup_GLF_color;
         _GLF_outVarBackup_GLF_color = _GLF_color;
         _GLF_color = fract(vec4(7041.9804, -6353.2749, -2810.4722, -8900.1782));
         if(_GLF_WRAPPED_IF_TRUE(true))
          {
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
        }
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     float GLF_dead5es = 1e-3;
     float GLF_dead5dx = GLF_dead5refr_dist_func(donor_replacementGLF_dead5pos + vec3(GLF_dead5es, 0., 0.)) - GLF_dead5refr_dist_func(donor_replacementGLF_dead5pos - vec3(GLF_dead5es, 0., 0.));
     {
      vec4 _GLF_outVarBackup_GLF_color;
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
       {
        _GLF_color = uintBitsToFloat(uvec4(38242u, 119418u, 184591u, 198910u));
       }
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = vec4(6.2, -2.0, -1845.2243, -10.21);
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     float GLF_dead5dy = GLF_dead5refr_dist_func(donor_replacementGLF_dead5pos + vec3(0., GLF_dead5es, 0.)) - GLF_dead5refr_dist_func(donor_replacementGLF_dead5pos - vec3(0., GLF_dead5es, 0.));
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      {
       _GLF_color = vec4(794.248, -1.3, 85.75, 2.7);
      }
     float GLF_dead5dz = GLF_dead5refr_dist_func(donor_replacementGLF_dead5pos + vec3(0., 0., GLF_dead5es)) - GLF_dead5refr_dist_func(donor_replacementGLF_dead5pos - vec3(0., 0., GLF_dead5es));
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = vec4(-8.6, -342.641, 1.1, -21.24);
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
         {
          _GLF_color = (atan(vec4(9930.5734, -7.2, -1.0, 9.2)) / -7.2);
         }
       }
     }
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(-2363.7380, 97.75, -2261.0615, -2.2);
      }
     normalize(- vec3(GLF_dead5dx, GLF_dead5dy, GLF_dead5dz));
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = faceforward(vec4(835.327, -8.3, 8.1, -225.569), vec4(-7.3, 2.1, 57.13, 11.95), vec4(-323.755, 284.467, 4.0, 5.6));
      if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
    }
   }
  vec4 _GLF_outVarBackup_GLF_color;
  if(_GLF_DEAD(false))
   {
    _GLF_color = vec4(-6.4, 2.8, -82.96, 525.028);
   }
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(751.277, -533.532, 126.848, -248.797);
  if(_GLF_DEAD(false))
   {
    _GLF_color = vec4(-715.273, -70.87, 0.1, -6.9);
   }
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
  if(_GLF_DEAD(false))
   {
    {
     vec4 _GLF_outVarBackup_GLF_color;
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
       {
        _GLF_color = mix(acos(vec4(-1.5, -550.485, -7590.9885, -2827.8489)), max(smoothstep(vec4(-1437.4366, -713.276, 6531.8873, 9.5), vec4(-4602.7214, -589.449, 4.0, 7.5), vec4(42.28, 2.2, 2.4, 1638.1539)), 1.0), bvec4(false, false, true, false));
       }
      if(_GLF_DEAD(false))
       {
        if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
         {
          _GLF_color = vec4(-700.701, 0.3, -317.334, -6.2);
         }
        _GLF_color = ceil(vec4(-812.110, -6.0, 7.7, -8.5));
       }
      _GLF_color = vec4(-258.304, -8061.8387, -5.1, 6369.9713);
      if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= sqrt(0.0)))))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
        if(_GLF_DEAD(false))
         {
          _GLF_color = vec4(-528.271, -378.617, 56.09, -0.8);
         }
        if(_GLF_DEAD(false))
         {
          _GLF_color = vec4(8.6, 87.75, -3391.6817, 3.5);
         }
        {
         vec4 _GLF_outVarBackup_GLF_color;
         _GLF_outVarBackup_GLF_color = _GLF_color;
         _GLF_color = vec4(-9.2, 565.317, 5.3, -6.1);
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
         _GLF_color = vec4(-4541.9982, 181.988, -8.9, 60.19);
         if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
          {
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
        }
        _GLF_color = vec4(-2.8, -193.638, -9.3, 7.1);
       }
     }
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = mix(vec4(-69.24, -2205.7222, -2.8, -772.014), vec4(82.26), vec4(-18.54, 36.13, uintBitsToFloat(105032u), -0.3));
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(-2508.8075, 9276.6316, 0.8, 808.237);
      }
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = atan(asin(vec4(4.8, -9277.3721, -1.8, 8.9)));
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      {
       _GLF_color = (mat4(5110.0660, 877.013, -43.15, -75.43, 7.2, 7.6, -8263.5940, -96.13, 9.1, 87.70, 9171.3099, -719.552, -3.8, -852.052, 6.6, 74.26) * vec4(33.80, 2.3, -40.44, -0.2));
      }
    }
    _GLF_color = round(vec4(6568.3566, 530.072, 6.3, -56.78));
    if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
     {
      _GLF_color = vec4(-987.031, -407.768, -75.42, 63.63);
     }
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = vec4(-83.06, 31.50, 33.84, -10.88);
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
   }
 }
}
vec3 reflectedColor(in vec3 p, in vec3 rd)
{
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-40.16, -3.3, 721.074, 53.66);
    }
   _GLF_color = vec4(30.21, 2.1, 7.0, -6.1);
  }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(-1883.6091, 3333.7915, -242.774, 2.1);
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 vec3 Ks = vec3(0.7);
 float shininess = 40.0;
 vec3 n = gradient(p);
 vec3 ref = reflect(rd, n);
 vec3 rc = vec3(0);
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = clamp(vec4(-7.5, -21.77, -88.71, -6.3), vec4(3162.0766, 3844.1205, -4.4, -3.9), vec4(51.72, -7.0, -5275.9387, -198.976));
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 vec3 light_pos = vec3(15.0, 20.0, 2.0);
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(2.7, 5.7, 0.7, -97.26);
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = vec4(0.1, -39.42, 813.678, 83.84);
  }
 vec3 light_color = vec3(1.0, 1.0, 1.0);
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-9.5, -1962.4301, -2.0, 442.699);
  }
 vec3 vl = normalize(light_pos - p);
 vec3 specular = vec3(max(0.0, dot(vl, ref)));
 {
  vec4 _GLF_outVarBackup_GLF_color;
  if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
   {
    _GLF_color = vec4(9954.6885, -79.70, 90.60, -363.809);
   }
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(-6.3, dot(292.631, mod(-58.69, 9269.3374)), vec2(9.0, -8381.3563));
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
    if(_GLF_DEAD(_GLF_IDENTITY(_GLF_FALSE(false, (gl_FragCoord.y < 0.0)), (_GLF_FALSE(false, (gl_FragCoord.y < 0.0))) || false)))
     {
      _GLF_color = vec4(53.86, 4.4, 486.190, -22.76);
     }
   }
 }
 vec3 F = fresnel(Ks, normalize(vl - rd), vl);
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = ceil(vec4(-3.2, 4.4, 7.3, 812.787));
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
     {
      _GLF_color = (step(fract(702.124), vec4(-544.862, 869.352, -844.792, 9752.5301)) + -8.3);
     }
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = mix(vec4(9.0, 0.8, 183.137, -433.273), vec4(37.81, 43.49, -968.545, -6539.5260), bvec4(true, true, false, false));
  if(_GLF_DEAD(false))
   {
    _GLF_color = vec4(-790.459, 653.505, -2021.0118, 640.301);
   }
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
    {
     if(_GLF_DEAD(false))
      {
       _GLF_color = min(min(vec4(-85.90, -21.22, -193.026, -3.2), vec4(9848.0738, 2.5, 16.73, -6498.3227)), vec4(5.0, 4206.2396, 218.419, -940.092));
      }
     vec4 _GLF_outVarBackup_GLF_color;
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = vec4(-890.710, 21.64, -2.7, -76.76);
      if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
         {
          _GLF_color = vec4(-731.588, 7918.9574, -757.061, -193.999);
         }
       }
     }
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      {
       _GLF_color = vec4(-2.0, 857.034, 4.6, 4.6);
      }
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = (vec4(-5.3, -2.3, 204.997, -4.3) - -65.87);
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
   }
 }
 specular = pow(specular, vec3(shininess));
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(67.13, 78.09, -1.8, -7.3);
  }
 rc += light_color * specular;
 return rc;
}
void mainImage(out vec4 fragColor, vec2 fragCoord)
{
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = tan(vec4(-7.1, 206.242, -494.772, 444.729));
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
    if(_GLF_DEAD(false))
     {
      _GLF_color = (mat3x4(5670.9334, -118.716, -25.29, -7879.6027, -53.68, -6.1, -517.295, -4517.7518, 6.6, 4706.7152, -0.3, -3.6) * vec3(-12.38, -1.4, -1.9));
     }
   }
 }
 vec2 p = (- resolution.xy + 2.0 * fragCoord.xy) / resolution.y;
 vec3 ro = vec3(- 5.0 * cos(0.2 * iTime + 10.0), 1.0, 5.0 * sin(0.2 * iTime + 10.0));
 vec3 ta = vec3(0., 0., 0.);
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   if(_GLF_DEAD(false))
    {
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      if(_GLF_DEAD(false))
       {
        _GLF_color = vec4(-6.6, 7062.9147, 6.7, -525.816);
       }
      _GLF_color = vec4(-1.4, -606.719, -0.8, 4770.2373);
      if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < length(0.0)))))
      {
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = vec4(5492.4341, -8.8, -81.66, -6789.0934);
        if(_GLF_WRAPPED_IF_TRUE(true))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
       _GLF_color = vec4(-128.245, -8.0, -3.0, -3984.9387);
      }
     vec3 donor_replacementGLF_dead4col = _GLF_FUZZED(ta);
     float donor_replacementGLF_dead4mainEye = _GLF_FUZZED(734.035);
     float donor_replacementGLF_dead4subEyes = _GLF_FUZZED(float(159248u));
     float donor_replacementGLF_dead4time = _GLF_FUZZED(abs(-674.139));
     vec2 donor_replacementGLF_dead4uv = _GLF_FUZZED(smoothstep(time, time, sin(sqrt(p))));
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      if(_GLF_DEAD(false))
       {
        _GLF_color = vec4(-4.1, 5.0, -7.1, 6.3);
       }
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
       {
        _GLF_color = vec4((-3093.1859 * vec2(947.721, 349.131)), vec2(-9.7, 3.3));
       }
      _GLF_color = vec4(-4.2, -1.6, -286.206, -3.1);
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
        {
         vec4 _GLF_outVarBackup_GLF_color;
         _GLF_outVarBackup_GLF_color = _GLF_color;
         _GLF_color = normalize(vec4(-2.8, vec2(5315.2351, -190.032), -561.615));
         if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
          {
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
        }
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
         {
          _GLF_color = vec4(6.9, 4.0, 5.8, 3525.6259);
         }
       }
     }
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(-47.07, -7992.8720, -494.263, -7.5);
      }
     {
      if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
       {
        _GLF_color = vec4(-21.01, 8689.6254, 804.372, -2.9);
       }
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = vec4(-0.5, 53.91, 7.1, 9.7);
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
         if(_GLF_DEAD(false))
          {
           _GLF_color = vec4(-37.79, -43.11, -1970.6247, -78.80);
          }
         {
          vec4 _GLF_outVarBackup_GLF_color;
          _GLF_outVarBackup_GLF_color = _GLF_color;
          _GLF_color = vec4(7.6, -71.20, -657.382, 29.72);
          if(_GLF_WRAPPED_IF_TRUE(true))
           {
            _GLF_color = _GLF_outVarBackup_GLF_color;
            if(_GLF_DEAD(false))
             {
              _GLF_color = vec4(6.0, 8.4, 739.765, -7.7);
             }
           }
         }
        }
      }
      if(_GLF_DEAD(false))
       {
        _GLF_color = vec4(6973.8741, -3209.8464, -20.30, 8819.1001);
       }
      donor_replacementGLF_dead4uv -= vec2(0., .31);
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       if(_GLF_DEAD(false))
        {
         _GLF_color = pow(vec4(32.35, -730.891, -2.5, 6549.1759), vec4(-1537.1771, -862.372, 40.82, 600.516));
        }
       _GLF_color = vec4(83.35, vec3(-3.0, 5.2, 4583.4043));
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = reflect((- vec4(563.244, 8.4, -8958.0115, -0.8)), vec4(4.2, -24.56, 4967.3711, -2585.5860));
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(0.1, -83.83, 7.8, 7.3);
        }
       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
      donor_replacementGLF_dead4uv.xy = donor_replacementGLF_dead4uv.yx;
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = vec4(-1.3, 97.41, 2788.1226, 430.116);
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          {
           _GLF_color = log(vec4(-1.0, -12.55, 40.41, 53.29));
          }
        }
      }
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = uintBitsToFloat(uvec4(76386u, 64586u, 156369u, 58922u));
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
         if(_GLF_DEAD(false))
          {
           _GLF_color = mod(vec4(5.9, 0.9, -6.7, 4.3), -5.3);
          }
         if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
          {
           _GLF_color = vec4(-29.32, 996.585, -0.2, 1.7);
          }
         {
          vec4 _GLF_outVarBackup_GLF_color;
          _GLF_outVarBackup_GLF_color = _GLF_color;
          _GLF_color = vec4(-7605.7816, -70.50, 140.318, -8.1);
          if(_GLF_WRAPPED_IF_TRUE(true))
           {
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
         }
        }
       if(_GLF_DEAD(false))
        {
         _GLF_color = (vec4(-3.2, 5.8, 15.83, -4.3) / vec4(-0.0, 7551.2272, -982.062, 1.8));
        }
      }
      vec2 GLF_dead4muv = donor_replacementGLF_dead4uv;
      GLF_dead4muv += GLF_dead4noise2(donor_replacementGLF_dead4uv * 10. - donor_replacementGLF_dead4time * .5) * .01;
      vec2 GLF_dead4buv = donor_replacementGLF_dead4uv;
      float GLF_dead4bending = max(0., - (donor_replacementGLF_dead4uv.y + .5) * 1.4);
      GLF_dead4bending += max(0., (donor_replacementGLF_dead4uv.y + .4) * .7);
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
        {
         _GLF_color = round(pow(vec4(0.7, -4.1, 1.0, -8781.5151), vec4(564.710, -914.441, 8307.0992, 2135.9690)));
        }
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = vec4(-2791.7606, 7066.5548, -6697.1245, -5862.2228);
       if(_GLF_DEAD(_GLF_IDENTITY(false, _GLF_FALSE(false, (gl_FragCoord.x < 0.0)) || (false))))
        {
         _GLF_color = vec4(8055.2516, -63.55, -5.6, 9.7);
        }
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
      GLF_dead4bending = GLF_dead4bending * GLF_dead4bending;
      GLF_dead4buv.x += GLF_dead4bending;
      float GLF_dead4s = GLF_dead4stripes(GLF_dead4buv * vec2(3., 1.5) + vec2(donor_replacementGLF_dead4time * .12, .7), StripesOpt(0.5, .3, 0.));
      float GLF_dead4mask = GLF_dead4circle(GLF_dead4muv - vec2(- .3, - .5), .5);
      float GLF_dead4bending2 = max(0., - (donor_replacementGLF_dead4uv.y + .5) * 1.8);
      GLF_dead4bending2 += max(0., (donor_replacementGLF_dead4uv.y + .5) * .7);
      GLF_dead4bending2 = GLF_dead4bending2 * GLF_dead4bending2;
      GLF_dead4mask = min(GLF_dead4mask, - (donor_replacementGLF_dead4uv.x + GLF_dead4bending2));
      GLF_dead4mask = min(GLF_dead4mask, donor_replacementGLF_dead4uv.x + .66 + donor_replacementGLF_dead4uv.y * .2);
      GLF_dead4mask = min(GLF_dead4mask, donor_replacementGLF_dead4uv.y + .7);
      float GLF_dead4innerMask = GLF_dead4mask - mix(.017, .012, GLF_dead4fit01(- .2, - .1, donor_replacementGLF_dead4uv.x));
      if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
       {
        _GLF_color = vec4(6.3, -253.195, 20.72, -3628.4385);
       }
      GLF_dead4innerMask = GLF_dead4smin(GLF_dead4innerMask, - donor_replacementGLF_dead4subEyes, mix(0.1, 0.01, donor_replacementGLF_dead4uv.x + 1.3));
      float GLF_dead4stripesMask = GLF_dead4innerMask - .01;
      float GLF_dead4eyes = max(donor_replacementGLF_dead4mainEye, donor_replacementGLF_dead4subEyes);
      GLF_dead4stripesMask = min(GLF_dead4stripesMask, - GLF_dead4eyes - mix(.0, .05, pow(GLF_dead4noise(donor_replacementGLF_dead4uv * 10. - donor_replacementGLF_dead4time * .1), 4.)));
      {
       vec4 _GLF_outVarBackup_GLF_color;
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(94.62, -89.83, -86.42, -2.8);
        }
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = (vec4(9760.5018, 51.70, 42.43, 3.3) / vec4(-3.9, 7241.0926, -1259.4304, -2.1));
       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
      GLF_dead4s = GLF_dead4smin(GLF_dead4s, GLF_dead4stripesMask, .02);
      donor_replacementGLF_dead4col = mix(donor_replacementGLF_dead4col, vec3(.14, .21, .3), GLF_dead4fill(GLF_dead4mask));
      donor_replacementGLF_dead4col = mix(donor_replacementGLF_dead4col, vec3(.292, .8, .653), GLF_dead4fill(GLF_dead4innerMask));
      donor_replacementGLF_dead4col = mix(donor_replacementGLF_dead4col, vec3(.4, .7, 1.), GLF_dead4fill(GLF_dead4s));
      donor_replacementGLF_dead4col;
     }
    }
   {
    vec4 _GLF_outVarBackup_GLF_color;
    if(_GLF_DEAD(false))
     {
      _GLF_color = ceil(vec4(-405.573, -8.3, 6.1, -1.7));
     }
    _GLF_outVarBackup_GLF_color = _GLF_color;
    if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
     {
      _GLF_color = floor(vec4(-9.9, -108.496, 9.5, -512.533));
     }
    _GLF_color = atan(vec4(-193.803, 4628.3181, -7.5, 1485.9639), vec4(-792.784, 1.8, -9.7, -433.913));
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   _GLF_color = vec4(89.65, -1.7, -8.8, 55.95);
  }
 float aa = 1.0 / min(resolution.y, resolution.x);
 mat3 camMat = calcLookAtMatrix(ro, ta, 0.0);
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-72.48, 9582.1943, 222.146, 46.91);
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   _GLF_color = vec4(6106.0391, -56.69, -4728.6892, 6.0);
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < abs(0.0)))))
  {
   _GLF_color = min(vec4(-770.592, -2663.8441, -755.978, -71.90), log(701.750));
  }
 vec3 rd = normalize(camMat * vec3(p.xy, 1.9 + 0.8 * sin(0.15 * iTime)));
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(-6932.1493, -2.1, -904.921, -8190.7350);
  if(_GLF_DEAD(false))
   {
    _GLF_color = (determinant(mat2(9.6, 0.9, 2642.0507, 2448.1038)) / vec4(-784.163, -97.94, 6.9, -0.8));
   }
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= sin(0.0)))))
   {
    if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
     {
      _GLF_color = vec4(-4142.4997, -65.53, 1794.7174, 4.0);
     }
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
  if(_GLF_DEAD(false))
   {
    _GLF_color = faceforward(vec4(3.4, 65.30, 50.37, -6.4), atan(vec4(-700.415, 512.674, -1.0, -8835.6579)), vec4(6.8, 2.8, -3.9, 3.8));
   }
 }
 mat3 rot = rotationXY(iMouse.xy * vec2(0.01, - 0.01));
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  if(_GLF_DEAD(false))
   {
    vec2 donor_replacementGLF_dead0b = _GLF_FUZZED(fragCoord);
    if(_GLF_DEAD(false))
     {
      {
       vec4 _GLF_outVarBackup_GLF_color;
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = sqrt(vec4(1095.0397, vec2(839.548, -5.7), -9115.6241));
        if(_GLF_DEAD(false))
         {
          _GLF_color = vec4(-476.730, 6.5, 7.7, 39.53);
         }
        if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = mix(pow(vec4(5399.8073, 4187.2262, -8.7, -69.49), vec4(983.150, -345.929, 9.2, 279.256)), vec4(-5.9, 2.4, 9228.4729, 52.66), (bvec4(false, false, true, true)));
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = vec4(0.0, -9968.0293, -0.3, -4.1);
        if(_GLF_WRAPPED_IF_TRUE(true))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= length(0.0)))))
        {
         {
          if(_GLF_DEAD(false))
           {
            _GLF_color = vec4(-273.230, -9.2, -9.5, 6152.6014);
           }
          vec4 _GLF_outVarBackup_GLF_color;
          _GLF_outVarBackup_GLF_color = _GLF_color;
          _GLF_color = vec4(-5.3, 8.3, -3067.5910, -7.6);
          if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= sin(0.0)))))
           {
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
         }
         _GLF_color = _GLF_outVarBackup_GLF_color;
         {
          vec4 _GLF_outVarBackup_GLF_color;
          _GLF_outVarBackup_GLF_color = _GLF_color;
          _GLF_color = vec4(1.7, -792.452, -754.898, 2461.2870);
          if(_GLF_WRAPPED_IF_TRUE(true))
           {
            if(_GLF_DEAD(false))
             {
              _GLF_color = vec4(0.2, -20.44, 1.6, 6945.3807);
             }
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
         }
        }
      }
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = vec4(-10.81, 416.179, 1.8, 86.18);
       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
      float donor_replacementGLF_dead4theta = _GLF_FUZZED((7019.1125));
      {
       float GLF_dead4c = cos(donor_replacementGLF_dead4theta);
       float GLF_dead4s = sin(donor_replacementGLF_dead4theta);
       mat2(GLF_dead4c, GLF_dead4s, - GLF_dead4s, GLF_dead4c);
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = vec4(6.5, -7668.3062, 611.667, 10.07);
        if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(true, ! (! (true)))))
         {
          if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
           {
            _GLF_color = vec4(-594.809, 82.89, -90.00, 342.620);
           }
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
      }
     }
    if(_GLF_DEAD(false))
     {
      _GLF_color = (mat4(mat4x3(80.56, 365.192, -5.0, -56.26, -3.6, -2910.4501, -7485.2344, -568.000, -9560.8658, -48.07, 4.0, -0.6)) * vec4(-6.5, -110.219, 6.7, -5645.0714));
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = vec4(1.9, -74.51, -6.3, 2493.6499);
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
     }
    float donor_replacementGLF_dead0c = _GLF_FUZZED(ta.p);
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = atan(vec4(-6466.0134, -37.03, -7.4, 6.2));
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= _GLF_ZERO(0.0, injectionSwitch.x)))))
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
        {
         _GLF_color = vec4(-993.301, -987.828, -2467.4420, 57.73);
        }
       _GLF_color = _GLF_outVarBackup_GLF_color;
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        {
         _GLF_color = vec4(4856.6098, -7.2, -9925.8001, 0.6);
        }
      }
    }
    vec3 donor_replacementGLF_dead0color = _GLF_FUZZED(rd);
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = asin(vec4(-5.5, -763.373, 2720.1670, -8.8));
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
    mediump vec4 donor_replacementGLF_dead0gl_FragColor = _GLF_FUZZED(fragColor);
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = vec4(-89.23, 514.656, -93.89, -1.2);
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
      {
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(-0.4, -12.78, 1.9, 84.75);
        }
       _GLF_color = _GLF_outVarBackup_GLF_color;
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = vec4(-36.81, 435.375, 1499.9198, -2475.9738);
        if(_GLF_WRAPPED_IF_TRUE(true))
         {
          if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
           {
            _GLF_color = vec4(-40.79, -4599.1657, 6.0, 6045.0585);
           }
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
      }
    }
    {
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = sign((vec4(-729.722, 898.776, -549.912, 0.3) * vec4(-2.0, -3610.7027, -835.877, 4.7)));
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        if(_GLF_DEAD(false))
         {
          _GLF_color = vec4(9.3, 1576.1508, -845.424, 7137.5974);
         }
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = vec4(7.0, -9.9, 9.3, 8323.1126);
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
    mediump vec4 donor_replacementGLF_dead0gl_FragCoord = _GLF_FUZZED(((mat3x4(-6965.6938, -74.50, -385.475, -8156.7378, -8.5, 94.77, 4.3, -3.7, 174.779, 0.4, -8.1, -111.231) / mat3x4(-52.86, -448.630, 614.728, -851.264, -7.5, 56.78, -292.725, 2243.7915, -295.942, -8395.2583, 3755.8485, -3318.5204)) * ta));
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      if(_GLF_DEAD(false))
       {
        _GLF_color = normalize((vec4(586.398, -35.47, 4.9, -5.8) * mat4(6698.8584, -401.980, -8.5, -0.9, 1.7, -890.172, 77.94, -5417.9270, 3530.4513, -73.08, -4903.5034, 142.803, 42.15, -1.5, 1.0, -6902.2331)));
       }
      _GLF_color = (-42.76 + vec4(-9.1, 8.8, -5053.0636, -4.9));
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     _GLF_color = vec4(40.83, 8.1, 26.76, 0.6);
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      if(_GLF_DEAD(false))
       {
        _GLF_color = (mat4(0.1, -1.5, 3.1, 6.0, 3.0, 4.9, 2.7, -94.82, -876.442, -0.3, -8836.9089, -4951.6399, -211.672, -323.281, -8.0, -4.1) * exp(vec4(-91.04, 4405.1012, -2.1, -5.2)));
       }
      _GLF_color = vec4(-44.79, 6112.7520, 15.19, 83.54);
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
       {
        _GLF_color = vec4(874.829, -4.0, 19.72, -3255.1445);
       }
      if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
       {
        if(_GLF_DEAD(false))
         {
          _GLF_color = trunc((- vec4(509.560, 6.8, -0.8, 0.9)));
         }
        _GLF_color = _GLF_outVarBackup_GLF_color;
        if(_GLF_DEAD(false))
         {
          _GLF_color = vec4(-112.860, 192.802, 3.0, 5.4);
         }
       }
     }
    }
    float donor_replacementGLF_dead0p = _GLF_FUZZED(aa);
    vec2 donor_replacementGLF_dead0resolution = _GLF_FUZZED(p);
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(4363.3064, -2861.1908, -852.864, 52.40);
     }
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
     {
      {
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(4.1, -3.7, 6257.5749, -3.5);
        }
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < sin(0.0)))))
        {
         _GLF_color = min(vec4(701.347, 0.7, 5.1, -69.53), -257.966);
        }
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = vec4(22.58, 88.81, 1660.1561, 9.7);
       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
      _GLF_color = roundEven(intBitsToFloat(ivec4(-52389, -31458, 27167, 30248)));
     }
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(-1.2, -6.6, -1406.5327, -7098.1304).sttt;
     }
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = vec4(6.2, 6.4, -526.236, 411.502);
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
    {
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      if(_GLF_DEAD(false))
       {
        _GLF_color = sqrt(vec4(1.7, -449.831, 1.1, 247.665));
       }
      _GLF_color = vec4(length(atan(vec2(0.2, -8442.5066))));
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
      if(_GLF_DEAD(false))
       {
        _GLF_color = (vec3(-80.35, 260.093, -3.7) * mat4x3(-463.367, -9.9, -6.6, 115.530, 4109.6139, -2.0, 66.54, -8.2, 7.9, -6186.2888, -748.404, -800.662));
       }
     }
     if(_GLF_DEAD(false))
      {
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = clamp(asin(vec4(407.796, 3602.2028, -10.94, -338.692)), -78.28, 816.290);
        if(_GLF_WRAPPED_IF_TRUE(true))
         {
          if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
           {
            _GLF_color = abs(min(vec4(0.5, 7476.6519, -717.260, 225.790), -7867.5361));
           }
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
       _GLF_color = normalize(vec4(6526.3701, -1.2, 6570.1352, 4.7));
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = vec4(-4.8, -36.38, -2.2, -384.104);
        if(_GLF_WRAPPED_IF_TRUE(true))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
      }
     vec2 GLF_dead0uv = donor_replacementGLF_dead0gl_FragCoord.xy / donor_replacementGLF_dead0resolution.xy;
     float GLF_dead0scale = donor_replacementGLF_dead0resolution.x / donor_replacementGLF_dead0resolution.y;
     GLF_dead0uv = GLF_dead0uv - 0.5;
     {
      vec4 _GLF_outVarBackup_GLF_color;
      if(_GLF_DEAD(false))
       {
        _GLF_color = (vec4(-70.75, -59.98, 8576.7916, -6.8) - dot(vec3(-451.592, 242.167, 5231.8338), (vec3(703.024, -11.89, 7.1) - 8.9)));
       }
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = vec4(-539.751, 22.24, -131.197, 6.7);
      if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
       {
        _GLF_color = vec4(-1.7, 7.7, 8042.8443, -0.5);
       }
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     GLF_dead0uv.y /= GLF_dead0scale;
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < length(0.0)))))
       {
        if(_GLF_DEAD(false))
         {
          _GLF_color = vec4(98.25, 3.6, -6.4, -146.258);
         }
        _GLF_color = vec4(-2.9, 111.587, 2.5, -8.9);
       }
      _GLF_color = mod(vec4(-5.4, -2.2, 922.144, 642.250), normalize(6.8));
      if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = (min(vec2(4569.8980, 1.9), 29.97) * mat4x2(-0.9, -8.2, -156.122, -3.6, 9758.4781, -2306.0425, -6202.7104, -73.06));
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     donor_replacementGLF_dead0b = GLF_dead0uv * 256.0 + 256.0;
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_ZERO(0.0, injectionSwitch.x)))))
       {
        _GLF_color = vec4(-8.4, -550.369, -9.4, 3.2);
       }
      _GLF_color = vec4(-5467.4411, -133.704, -13.88, -9681.4580);
      if(_GLF_DEAD(false))
       {
        _GLF_color = vec4(4598.9755, 2.4, -584.200, 1444.9485);
       }
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     donor_replacementGLF_dead0c = 0.0;
     for(
         float GLF_dead0i = 16.0;
         GLF_dead0i >= 1.0;
         GLF_dead0i -= 1.0
     )
      {
       donor_replacementGLF_dead0p = pow(2.0, GLF_dead0i);
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < length(0.0)))))
        {
         _GLF_color = vec4(-811.412, 4236.3998, -0.1, 26.64);
        }
       if((donor_replacementGLF_dead0p < donor_replacementGLF_dead0b.x) ^^ (donor_replacementGLF_dead0p < donor_replacementGLF_dead0b.y))
        {
         donor_replacementGLF_dead0c += donor_replacementGLF_dead0p;
        }
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(0.9, 3.0, 12.80, -8.0);
        }
       if(donor_replacementGLF_dead0p < donor_replacementGLF_dead0b.x)
        {
         {
          if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
           {
            _GLF_color = asin(vec4(-880.061, -1.9, 4.7, -480.121));
           }
          vec4 _GLF_outVarBackup_GLF_color;
          _GLF_outVarBackup_GLF_color = _GLF_color;
          _GLF_color = vec4(9.3, 5693.2606, 2.9, 0.8);
          if(_GLF_WRAPPED_IF_TRUE(true))
           {
            if(_GLF_DEAD(false))
             {
              _GLF_color = refract(vec4(-5347.1131, 9231.5836, 9.4, 9.0), vec4(-162.934, 82.75, 9686.8648, -872.267), vec3(-91.48, 9.9, -0.5)[1]);
             }
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
         }
         if(_GLF_DEAD(false))
          {
           _GLF_color = mod(vec4(3304.4867, 2.0, -1.3, -3939.8839), 897.239);
          }
         {
          if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
           {
            _GLF_color = vec4(2.1, -2.0, -0.4, 7.7);
           }
          vec4 _GLF_outVarBackup_GLF_color;
          _GLF_outVarBackup_GLF_color = _GLF_color;
          _GLF_color = vec4(-14.75, -284.519, 922.758, -92.92);
          if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
           {
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
          if(_GLF_DEAD(false))
           {
            _GLF_color = vec4(1872.7362, -1.9, -59.20, -7.7);
           }
         }
         donor_replacementGLF_dead0b.x -= donor_replacementGLF_dead0p;
        }
       if(_GLF_DEAD(false))
        {
         _GLF_color = pow(vec4(98.43, -65.55, -5.5, -5.6), vec4(-774.230, -1.7, 2093.4387, 4128.1722));
        }
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = vec4(8.2, -8.1, 49.85, 4.7);
        if(_GLF_DEAD(false))
         {
          _GLF_color = vec4(-56.92, 708.172, -10.77, 3450.0801);
         }
        if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(true, (true) || false)))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
       if(donor_replacementGLF_dead0p < donor_replacementGLF_dead0b.y)
        {
         donor_replacementGLF_dead0b.y -= donor_replacementGLF_dead0p;
        }
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        if(_GLF_DEAD(false))
         {
          _GLF_color = log2(vec4(-257.200, 9.3, -263.695, -4.2));
         }
        _GLF_color = vec4(44.40, 4.0, -294.403, -4.3);
        if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
          if(_GLF_DEAD(false))
           {
            _GLF_color = vec4(43.06, 510.860, 4.8, 1.2);
           }
          if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
           {
            _GLF_color = vec4(2867.3517, -4.2, 7.0, -80.91);
            {
             vec4 _GLF_outVarBackup_GLF_color;
             _GLF_outVarBackup_GLF_color = _GLF_color;
             _GLF_color = vec4(9189.9189, -208.889, 5.7, -5.3);
             if(_GLF_WRAPPED_IF_TRUE(true))
              {
               _GLF_color = _GLF_outVarBackup_GLF_color;
              }
            }
           }
         }
       }
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < tan(0.0)))))
        {
         float donor_replacementGLF_dead5d = _GLF_FUZZED(time);
         vec3 donor_replacementGLF_dead5dir = _GLF_FUZZED(mix(rd, ro, _GLF_outVarBackup_GLF_color[1]));
         float donor_replacementGLF_dead5dist = _GLF_FUZZED((GLF_dead0scale --));
         {
          vec4 _GLF_outVarBackup_GLF_color;
          _GLF_outVarBackup_GLF_color = _GLF_color;
          if(_GLF_DEAD(false))
           {
            _GLF_color = vec4(3140.4997, -7.2, -8.6, -0.6);
           }
          _GLF_color = (vec4(2.3, 7.6, 69.72, -4.2) - vec4(175.274, 3940.6959, 7.1, -9416.0342));
          if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
           {
            _GLF_color = _GLF_outVarBackup_GLF_color;
            if(_GLF_DEAD(false))
             {
              if(_GLF_DEAD(false))
               {
                _GLF_color = vec4(4.4, -0.0, 5414.5013, -68.93);
               }
              _GLF_color = vec4(-4702.0195, -110.657, 8.8, 0.3);
             }
           }
         }
         vec3 donor_replacementGLF_dead5pos = _GLF_FUZZED((rd * donor_replacementGLF_dead0color));
         {
          if(length(donor_replacementGLF_dead5pos - ro) < 1e-1)
           {
            {
             vec4 _GLF_outVarBackup_GLF_color;
             _GLF_outVarBackup_GLF_color = _GLF_color;
             _GLF_color = outerProduct(vec4(-5088.8935, -3.3, 9002.0584, -94.30), vec2(765.824, 45.59))[0];
             if(_GLF_WRAPPED_IF_TRUE(true))
              {
               _GLF_color = _GLF_outVarBackup_GLF_color;
              }
            }
            exp(- donor_replacementGLF_dead5dist * 0.05);
            if(_GLF_DEAD(false))
             {
              _GLF_color = (true ? vec4(0.4, -5.4, -72.70, -6.5) : vec4(4.7, -4.2, 43.90, -6.9));
             }
           }
          if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
           {
            _GLF_color = vec3(3.1, 911.634, 9.1).zyzz;
           }
          donor_replacementGLF_dead5pos += donor_replacementGLF_dead5dir * donor_replacementGLF_dead5d;
          if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
           {
            _GLF_color = min(vec4(-1.9, 64.83, 81.15, 2701.0840), vec4(-733.885, 8.2, 534.294, 799.299));
           }
          donor_replacementGLF_dead5dist += donor_replacementGLF_dead5d;
          if(_GLF_DEAD(false))
           {
            _GLF_color = vec4(-1.5, -9557.3831, -468.046, 4.9);
           }
          donor_replacementGLF_dead5d = GLF_dead5dist_func(donor_replacementGLF_dead5pos);
          if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
           {
            _GLF_color = vec4(-4.0, 7.5, 2.3, 204.996);
           }
          if(donor_replacementGLF_dead5d < 1e-6)
           {
            0.;
           }
          donor_replacementGLF_dead5d = min(GLF_dead5dist_func(donor_replacementGLF_dead5pos), length(donor_replacementGLF_dead5pos - ro));
         }
        }
      }
     donor_replacementGLF_dead0c = mod(donor_replacementGLF_dead0c / 128.0, 1.0);
     donor_replacementGLF_dead0color = vec3(sin(donor_replacementGLF_dead0c + GLF_dead0uv.x * cos(GLF_dead0uv.y * 1.2)), tan(donor_replacementGLF_dead0c + GLF_dead0uv.y - 0.3) * 1.1, cos(donor_replacementGLF_dead0c - GLF_dead0uv.y + 0.9));
     donor_replacementGLF_dead0gl_FragColor = vec4(donor_replacementGLF_dead0color, 1.0);
    }
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(-2448.5571, -9.3, 4.0, -8.9);
     }
   }
  _GLF_color = vec4(4.7, 8.3, -8.9, 3363.9516);
  if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
   {
    _GLF_color = trunc(vec4(9.0, -4.7, -3068.5528, 17.70));
   }
  if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0)), (_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))) || false)))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
  if(_GLF_DEAD(false))
   {
    _GLF_color = vec4(-25.30, 6.6, -2.8, -9.4);
   }
  if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
   {
    _GLF_color = vec4(18.79, -2.3, -41.14, 44.50);
   }
  if(_GLF_DEAD(false))
   {
    _GLF_color = log2(vec4(9.5, -6001.2707, -33.22, -4.6));
   }
 }
 rd = rot * rd;
 ro = rot * ro;
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = (max(vec3(4586.9598, -5.8, 9.9), vec3(48.69, -0.0, 0.6)) * (-3.3 - mat4x3(7696.0530, -9.0, 626.531, -17.80, 2.4, -4.9, -69.42, 858.181, 3639.0629, -0.5, -1.6, -95.52)));
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
  if(_GLF_DEAD(false))
   {
    _GLF_color = vec4((7927.3570 + -785.900), 745.770, determinant(mat2(0.7, -3546.6263, 3.7, -6.8)), 4577.0619);
   }
 }
 {
  if(_GLF_DEAD(false))
   {
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = max(vec4(0.3, -18.60, -2.8, 30.94), 2292.2140);
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        {
         _GLF_color = vec4(36.24, -7.4, -487.243, 952.046);
        }
      }
    }
    _GLF_color = vec4(-827.039, 4040.1666, 9445.3424, -7.4);
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = min(vec4(-733.166, 0.1, -961.249, -6.5), -6.7);
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      {
       _GLF_color = vec4(8760.3669, 282.320, 6.4, -5154.2294);
      }
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
   }
  if(_GLF_DEAD(false))
   {
    _GLF_color = vec4(-4135.3213, -8282.1600, 491.397, -2.2);
   }
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  {
   vec4 _GLF_outVarBackup_GLF_color;
   _GLF_outVarBackup_GLF_color = _GLF_color;
   _GLF_color = mix(vec4(-784.775, -813.275, 3.3, -7.8), vec4(644.703, -92.01, 6.0, -506.943), vec4(9315.1981, 15.39, 9.2, 9.9));
   if(_GLF_WRAPPED_IF_TRUE(true))
    {
     _GLF_color = _GLF_outVarBackup_GLF_color;
    }
  }
  _GLF_color = vec4(62.82, -7.7, -6.8, 7.0);
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
     {
      _GLF_color = vec4(12.52, -0.2, -832.284, 6.6);
     }
    if(_GLF_DEAD(false))
     {
      if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
       {
        _GLF_color = max(vec4(42.72, -3841.0988, -5.9, -3633.3803), vec4(-8595.5661, 41.13, 86.21, -551.981));
       }
      {
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = vec4(vec2(56.00, -9.9), vec2(-762.111, 8173.0482));
        if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
        if(_GLF_DEAD(false))
         {
          _GLF_color = vec4(1.1, -633.460, -8066.0582, 0.7);
         }
       }
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = vec4(-6323.9145, -65.97, vec2(-482.865, 17.09));
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
      _GLF_color = vec4(44.30, 0.4, 9.3, 8.2);
     }
    if(_GLF_DEAD(false))
     {
      vec3 donor_replacementGLF_dead3ro = _GLF_FUZZED(rd);
      if(_GLF_DEAD(false))
       {
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
         {
          _GLF_color = mod(vec4(9589.3804, -2460.6619, 24.65, 29.13), exp2(745.338));
         }
        _GLF_color = vec4(-9819.9529, -2757.9877, 27.29, -8.1);
        {
         vec4 _GLF_outVarBackup_GLF_color;
         _GLF_outVarBackup_GLF_color = _GLF_color;
         _GLF_color = (vec4(761.718, -8.8, 436.797, 95.24) * 214.562);
         if(_GLF_DEAD(false))
          {
           _GLF_color = vec4(2.2, 10.20, -432.518, -5520.1839);
          }
         if(_GLF_WRAPPED_IF_TRUE(true))
          {
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
        }
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
         {
          _GLF_color = (max(vec4(-84.12, 3270.4211, -75.14, 6.5), -49.55));
         }
       }
      float donor_replacementGLF_dead3roll = _GLF_FUZZED(aa);
      vec3 donor_replacementGLF_dead3ta = _GLF_FUZZED(rd);
      if(_GLF_DEAD(false))
       {
        _GLF_color = (reflect(vec4(-7747.9354, 33.95, -2555.3393, 4.3), normalize(vec4(-3409.4898, -877.358, 705.755, 1.9))) * 60.09);
       }
      {
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(-9.2, 2368.3872, 740.479, 3.5);
        }
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
         {
          _GLF_color = vec4(-4.6, -1.9, -370.385, 2.0);
         }
        _GLF_color = exp2(vec4(-1.1, -691.235, 262.049, -83.10));
        if(_GLF_WRAPPED_IF_TRUE(true))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
       vec3 GLF_dead3ww = normalize(donor_replacementGLF_dead3ta - donor_replacementGLF_dead3ro);
       if(_GLF_DEAD(false))
        {
         if(_GLF_DEAD(false))
          {
           _GLF_color = vec4(9098.2174, -147.883, -291.794, -560.835);
          }
         {
          vec4 _GLF_outVarBackup_GLF_color;
          _GLF_outVarBackup_GLF_color = _GLF_color;
          _GLF_color = vec4(-3.3, -26.58, -999.755, 598.239);
          if(_GLF_WRAPPED_IF_TRUE(true))
           {
            if(_GLF_DEAD(false))
             {
              _GLF_color = vec4(5.8, -919.766, -4.9, 369.646);
             }
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
         }
         _GLF_color = vec4(222.747, -7908.8889, 77.35, -532.935);
        }
       vec3 GLF_dead3uu = normalize(cross(GLF_dead3ww, vec3(sin(donor_replacementGLF_dead3roll), cos(donor_replacementGLF_dead3roll), 0.0)));
       if(_GLF_DEAD(false))
        {
         _GLF_color = inversesqrt(vec4(-924.132, -72.21, 41.45, 41.12));
        }
       vec3 GLF_dead3vv = normalize(cross(GLF_dead3uu, GLF_dead3ww));
       mat3(GLF_dead3uu, GLF_dead3vv, GLF_dead3ww);
      }
     }
   }
 }
 vec3 col = vec3(0), sp;
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(4.6, 6536.0629, 522.560, 8620.8474);
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < length(0.0)))))
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < log(1.0)))))
      {
       _GLF_color = vec4(-2.7, -715.255, -8819.5362, 8.7);
      }
     _GLF_color = vec4(3.0, 3.7, 94.36, 41.85);
    }
   float donor_replacementGLF_dead3aD = _GLF_FUZZED(length((5362.4542 * vec4(147.005, 0.4, -751.690, 2.2))));
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = (mat3x4(mat4x3(943.943, -3087.5834, -4551.0613, 6.8, 246.879, -870.771, 4.2, 95.99, -8.5, 8.1, 953.954, 3.6)) * vec3(-9.0, -66.31, 2160.3875));
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(7.0, 2.6, 2210.6687, 0.6);
     }
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   float donor_replacementGLF_dead3layers = _GLF_FUZZED(-411.248);
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(3.7, 7.4, 56.40, 8629.4684);
    }
   vec3 donor_replacementGLF_dead3rd = _GLF_FUZZED(vec3(-7.5, -5041.0801, 96.49));
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(-188.926, 0.6, 5318.6600, 6.8);
     }
    _GLF_color = vec4(7.6, 4.8, mix(75.16, 127.491, false), determinant(mat2(-9.2, -7.3, -4.3, 28.84)));
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   vec3 donor_replacementGLF_dead3sp = _GLF_FUZZED(ta);
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = vec4(-9618.8667, -6671.5553, -0.1, -0.5);
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   float donor_replacementGLF_dead3t = _GLF_FUZZED(acos(aa));
   if(donor_replacementGLF_dead3aD > 0.)
    {
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(-28.87, -5.6, -2.1, -958.027);
      }
     vec3 GLF_dead3sc = GLF_dead3selfColor(donor_replacementGLF_dead3sp);
     sp += 8. * GLF_dead3sc * (donor_replacementGLF_dead3aD * donor_replacementGLF_dead3aD * (3. - 2. * donor_replacementGLF_dead3aD) / (1. + donor_replacementGLF_dead3t * donor_replacementGLF_dead3t * 0.85));
     sp += 1.0 * GLF_dead3reflectedColor(donor_replacementGLF_dead3sp, donor_replacementGLF_dead3rd);
     donor_replacementGLF_dead3layers ++;
    }
  }
 float t = 0., layers = 0., d, aD;
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(-8.6, -6496.9436, 9.0, -75.09);
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
     {
      _GLF_color = vec2(-2.8, -38.67).gggr;
     }
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 float thD = 0.3 * sqrt(aa);
 for(
     int i = 0;
     i < 50;
     i ++
 )
  {
   {
    vec4 _GLF_outVarBackup_GLF_color;
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = vec4(-7362.8656, 47.29, -6499.1399, -272.406);
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
      {
       if(_GLF_DEAD(false))
        {
         _GLF_color = clamp(vec4(63.88, -236.575, -9.9, -7179.1778), vec4(-0.2, 9.3, 8.9, -54.43), vec4(465.063, -4.8, -1.6, 572.644));
        }
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
     {
      _GLF_color = (inversesqrt(vec4(4.0, 237.952, 4103.7004, 7.4)) / vec4(26.01, 5369.9946, 5274.1729, 38.80));
     }
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = refract(pow(vec4(-630.085, 9.7, 6.2, 28.34), vec4(-608.070, 0.0, -925.538, -6.1)), vec4(-919.147, -8.6, 7.7, 2246.7001), 1.2);
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= sin(0.0)))))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4((vec2(3271.3687, 9319.5238) * 5616.5896), (-938.802), 7.3);
     }
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = vec4(-4.9, -67.78, -7.2, -898.058);
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
    if(_GLF_DEAD(false))
     {
      _GLF_color = round(vec4(18.83, -5313.1678, 8140.2540, -552.409));
     }
   }
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(915.330, 7150.3060, -0.6, -8.3);
    }
   if(layers > 12. || col.g > 1.0 || t > 8.)
    break;
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = vec4(-951.550, -3819.6613, 5.2, 9.4);
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
       {
        _GLF_color = acos(vec4(-52.90, 2.2, 2.6, 546.035));
       }
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < log(1.0)))))
        {
         _GLF_color = vec4(0.9, 43.16, 8.4, -4.4);
        }
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(-12.60, -933.588, 904.122, 357.852);
        }
       _GLF_color = vec4(-41.90, -7.8, -7292.7045, 5459.6109);
       if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(true, (true ? true : _GLF_FUZZED(false)))))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          {
           _GLF_color = (vec4(369.634, -4.4, -8.9, -3420.0075) * vec4(48.16, -885.847, -1.7, -5447.2753));
          }
         {
          vec4 _GLF_outVarBackup_GLF_color;
          _GLF_outVarBackup_GLF_color = _GLF_color;
          _GLF_color = mix(vec4(37.58, 7.5, -6.4, 3871.9497), vec4(-61.33, 3.8, 6.2, -2445.1693), -4449.7879);
          if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= length(0.0)))))
           {
            _GLF_color = _GLF_outVarBackup_GLF_color;
            if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
             {
              _GLF_color = vec4(-81.04, 2945.9972, 3.7, -9236.8446);
             }
           }
         }
        }
       if(_GLF_DEAD(false))
        {
         _GLF_color = roundEven(vec4(-1551.2713, -73.83, 26.15, -68.76));
         {
          vec4 _GLF_outVarBackup_GLF_color;
          _GLF_outVarBackup_GLF_color = _GLF_color;
          _GLF_color = vec4(5.0, 3966.4618, -1.2, -7315.9993);
          if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
           {
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
         }
        }
      }
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     _GLF_color = (vec2(4.4, -2953.9009) * (mat4x2(-88.98, 3086.3089, -785.855, 414.737, -5.9, -0.6, -58.87, 53.44) - 87.14));
    }
   if(_GLF_DEAD(false))
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      {
       _GLF_color = vec4(520.291, 80.28, 9.9, -75.13);
      }
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(64.46, 1.9, 4866.8386, -1312.9287);
      }
     vec3 donor_replacementGLF_dead5dir = _GLF_FUZZED(col);
     float donor_replacementGLF_dead5dist = _GLF_FUZZED(uintBitsToFloat(111037u));
     {
      vec4 _GLF_outVarBackup_GLF_color;
      if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
       {
        _GLF_color = fract(vec4(5978.6608, 1447.4271, 4488.9094, -35.28));
       }
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = step(distance(vec4(-6.4, 1.6, 3.3, -292.509), vec4(23.10, -6843.2376, 96.83, -63.67)), vec4(-4.9, 302.843, -16.57, 9.6));
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
      if(_GLF_DEAD(false))
       {
        _GLF_color = vec4(-4.8, -8.3, -921.150, -7367.0578);
       }
     }
     vec3 donor_replacementGLF_dead5pos = _GLF_FUZZED(ro);
     float donor_replacementGLF_dead5rd = _GLF_FUZZED(d);
     {
      donor_replacementGLF_dead5pos += donor_replacementGLF_dead5dir * min(iTime, donor_replacementGLF_dead5rd);
      if(_GLF_DEAD(false))
       {
        _GLF_color = vec4(2.9, -4288.6818, -6.0, 9.7);
       }
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < _GLF_ZERO(0.0, injectionSwitch.x)))))
       {
        _GLF_color = vec4(-4.7, -3.4, 979.247, -88.94);
       }
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = vec4(-2.3, -4283.9114, 4.3, 281.912);
       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
          {
           _GLF_color = vec4(50.78, 33.96, 1.1, -2.5);
          }
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
      donor_replacementGLF_dead5dist += min(iTime, donor_replacementGLF_dead5rd);
      iTime = GLF_dead5dist_func(donor_replacementGLF_dead5pos);
      {
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = vec4(0.2, 7.9, 6.7, -2.7);
        if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = vec4(0.5, -8.4, -79.01, -21.55);
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = vec4(-166.182, 9.0, -148.310, -56.32);
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
          {
           _GLF_color = vec4(61.85, -0.8, 7.8, -26.45);
          }
         vec4 _GLF_outVarBackup_GLF_color;
         _GLF_outVarBackup_GLF_color = _GLF_color;
         _GLF_color = max(vec4(63.24, 9.4, 6822.8419, -9463.0691), -3268.3439);
         if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
          {
           _GLF_color = ceil(vec4(3.2, -3.3, -186.175, -79.56));
          }
         if(_GLF_WRAPPED_IF_TRUE(true))
          {
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
        }
        if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= abs(0.0)))))
         {
          {
           vec4 _GLF_outVarBackup_GLF_color;
           _GLF_outVarBackup_GLF_color = _GLF_color;
           _GLF_color = vec4(-62.84, -5823.6360, 3163.4973, -7.6);
           if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
            {
             _GLF_color = _GLF_outVarBackup_GLF_color;
            }
          }
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
        if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
         {
          _GLF_color = vec4(8.4, 2466.2354, 836.274, -43.00);
         }
       }
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
      donor_replacementGLF_dead5rd = abs(GLF_dead5refr_dist_func(donor_replacementGLF_dead5pos));
      if(iTime < 1e-3)
       {
        break;
       }
      if(abs(donor_replacementGLF_dead5rd) < 1e-3)
       {
        vec3 GLF_dead5norm = GLF_dead5refr_norm_func(donor_replacementGLF_dead5pos);
        float GLF_dead5k = GLF_dead5refr_func(donor_replacementGLF_dead5pos);
        donor_replacementGLF_dead5dir = refract(normalize(donor_replacementGLF_dead5dir), normalize(GLF_dead5norm), 1. / GLF_dead5k);
        if(_GLF_DEAD(false))
         {
          _GLF_color = (vec4(-794.573, -3.7, -820.777, 1672.0265) * -9.2);
         }
        donor_replacementGLF_dead5pos += donor_replacementGLF_dead5dir * min(iTime, donor_replacementGLF_dead5rd);
        donor_replacementGLF_dead5dist += min(iTime, donor_replacementGLF_dead5rd);
       }
     }
    }
   sp = ro + rd * t;
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    {
     if(_GLF_DEAD(false))
      {
       _GLF_color = max(vec4(51.84, 3066.2653, -0.2, 9.8), (tan(vec2(7477.2823, -6.3)) * mat4x2(mat2x4(8552.8064, -6.7, -4.8, -37.96, -75.13, 8467.9029, -8.4, 3324.4341))));
      }
     _GLF_color = mod(exp2(vec4(-9.9, 9123.0089, 6697.9296, 8.8).zwyw), (dot(vec2(-32.77, -95.97), vec2(577.289, -0.8)) / normalize(vec4(1.1, 192.611, -5.6, 95.19))));
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     _GLF_color = vec4(614.998, 47.40, -1.4, -88.43);
    }
   d = map(sp);
   aD = (thD - abs(d)) / thD;
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    {
     _GLF_color = mat3x4(-16.69, 421.166, -9323.6946, 64.70, -21.71, 0.0, 5.7, 24.29, 9.4, 2.7, 8096.0710, -46.96)[2];
    }
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = vec4(-91.33, 7213.6287, 6712.9073, 9.7);
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   if(aD > 0.)
    {
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = vec4(-3136.4820, -43.43, -7.7, 1.2);
      if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     vec3 sc = selfColor(sp);
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = vec4(7882.5604, 1030.5911, -4.8, 7.9);
      if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
        {
         vec4 _GLF_outVarBackup_GLF_color;
         _GLF_outVarBackup_GLF_color = _GLF_color;
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          {
           _GLF_color = vec4(-0.9, 4.1, 331.936, -2.5);
          }
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          {
           _GLF_color = (vec4(7969.4604, 4728.9879, 3.7, -2.6));
           if(_GLF_DEAD(false))
            {
             _GLF_color = vec4(66.48, 180.188, -9527.2194, 0.0);
            }
          }
         _GLF_color = vec4(682.033, 677.990, -65.83, 284.870);
         if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
          {
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
        }
       }
     }
     if(_GLF_DEAD(false))
      {
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(-2.6, 298.674, -830.195, -22.90);
        }
       _GLF_color = vec4(65.30, -1.3, -640.877, 6880.8565);
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = vec4(-0.9, -978.828, 641.708, 8568.8790);
        if(_GLF_WRAPPED_IF_TRUE(true))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
      }
     col += 8. * sc * (aD * aD * (3. - 2. * aD) / (1. + t * t * 0.85));
     if(_GLF_DEAD(_GLF_IDENTITY(false, ! (_GLF_IDENTITY(! (false), ! (! (! (false))))))))
      {
       if(_GLF_DEAD(false))
        {
         _GLF_color = step(-2.0, vec4(-820.637, 675.346, 7040.5134, -61.40));
        }
       if(_GLF_DEAD(_GLF_IDENTITY(false, (false ? _GLF_FUZZED(false) : false))))
        {
         _GLF_color = vec4(30.89, 3896.5985, -875.707, 9.4);
        }
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = vec4(764.064, 127.300, 69.47, -3787.3597);
        if(_GLF_DEAD(false))
         {
          _GLF_color = vec4(-5736.4629, 8528.8896, 1.8, 56.98);
         }
        if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
       {
        {
         vec4 _GLF_outVarBackup_GLF_color;
         _GLF_outVarBackup_GLF_color = _GLF_color;
         _GLF_color = vec4(49.63, -4308.3293, -9952.9510, 7.5);
         if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
          {
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
        }
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = vec4(-2350.4657, -1783.1395, -7416.2294, -9220.2686);
        if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
       vec3 donor_replacementGLF_dead2b = _GLF_FUZZED(min(cross(rd, col), trunc(aD)));
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < length(0.0)))))
        {
         _GLF_color = vec4(54.11, vec3(-956.865, -97.46, 56.39));
        }
       vec3 donor_replacementGLF_dead2p = _GLF_FUZZED(sp);
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(-7.4, -1.6, 634.490, -5786.9678);
        }
       {
        vec4 _GLF_outVarBackup_GLF_color;
        if(_GLF_DEAD(false))
         {
          _GLF_color = (- vec4(-7212.6460, 6238.1189, 405.402, 508.190));
         }
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = vec4(-4.2, length(vec3(6.7, -4480.8226, -8.5)), tan(-26.25), dot(2.4, 212.824));
        if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= length(0.0)))))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
          if(_GLF_DEAD(false))
           {
            _GLF_color = vec4(-6.4, -0.8, -2.0, -8.9);
           }
         }
        if(_GLF_DEAD(false))
         {
          _GLF_color = step(vec4(5.1, -528.186, 8.7, -3.3), vec4(-6456.4029, -8.2, 2220.7872, -6.3));
         }
       }
       {
        {
         vec4 _GLF_outVarBackup_GLF_color;
         _GLF_outVarBackup_GLF_color = _GLF_color;
         _GLF_color = (vec4(-1.4, -48.62, 1977.3371, -2.3) * vec4(110.245, 1.9, -2.9, 964.694));
         if(_GLF_WRAPPED_IF_TRUE(true))
          {
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
        }
        {
         vec4 _GLF_outVarBackup_GLF_color;
         _GLF_outVarBackup_GLF_color = _GLF_color;
         {
          {
           vec4 _GLF_outVarBackup_GLF_color;
           _GLF_outVarBackup_GLF_color = _GLF_color;
           if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
            {
             _GLF_color = (- vec4(-641.689, -24.05, 8.8, 6.9));
            }
           _GLF_color = vec4(-29.00, -33.09, 6.1, 656.187);
           if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
            {
             _GLF_color = _GLF_outVarBackup_GLF_color;
            }
          }
          vec4 _GLF_outVarBackup_GLF_color;
          _GLF_outVarBackup_GLF_color = _GLF_color;
          _GLF_color = vec4(73.47, 7366.5151, -594.185, -8028.8051);
          if(_GLF_DEAD(false))
           {
            _GLF_color = vec4(16.45, -747.350, 4300.1206, 60.38);
           }
          if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
           {
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
         }
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < sqrt(0.0)))))
          {
           _GLF_color = vec4(7670.6928, -216.362, 643.517, 2807.0154);
          }
         _GLF_color = round(vec4(4.8, -2.7, -7.7, 9.1));
         if(_GLF_WRAPPED_IF_TRUE(true))
          {
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
        }
        vec3 GLF_dead2d = abs(donor_replacementGLF_dead2p) - donor_replacementGLF_dead2b;
        if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
         {
          _GLF_color = vec4(-3.9, 5.0, -26.74, -71.21);
         }
        min(max(GLF_dead2d.x, max(GLF_dead2d.y, GLF_dead2d.z)), 0.0) + length(max(GLF_dead2d, 0.0)) - 0.2;
       }
      }
     if(_GLF_DEAD(false))
      {
       _GLF_color = sign(vec4(round(vec2(-4.8, -2.6)), vec2(556.937, 0.9)));
      }
     {
      vec4 _GLF_outVarBackup_GLF_color;
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
       {
        _GLF_color = (floor(6026.2033) / vec4(3.4, 589.533, 8.0, -1168.7190));
       }
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = vec4(42.07, 713.161, -255.077, 2.6);
      if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(3.9, vec2(791.913, -5.4), 5.1);
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
      {
       _GLF_color = vec4(-25.43, 911.568, 6248.4340, 3.4);
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec3(-27.88, -75.72, 13.36).rrgg;
        }
      }
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(-7.0, -0.2, 193.985, 5.9);
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      {
       _GLF_color = vec4(-9.4, -1.5, -35.95, -9151.2273);
      }
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = vec4(8.7, -9.6, 9.6, -5.6);
      if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     col += 1.0 * reflectedColor(sp, rd);
     layers ++;
    }
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = vec4(7.4, -3997.1128, 4.3, 981.033);
    if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   t += max(abs(d) * 0.8, thD * 1.1);
   if(_GLF_DEAD(false))
    {
     const int donor_replacementGLF_dead1MENGER_ITERATIONS = _GLF_FUZZED(-78478);
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      {
       _GLF_color = clamp((+ vec4(6515.0421, 0.7, 4.1, -8.5)), vec4(136.099, -8451.3089, 8042.5925, -2.6), sign(vec4(-647.439, -1.2, -6.2, -0.1)));
      }
     if(_GLF_DEAD(false))
      {
       _GLF_color = mod(vec4(-859.268, vec3(412.660, 72.92, -186.235)), 91.98);
      }
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(9939.3147, -530.281, -41.14, -1.7);
      }
     vec3 donor_replacementGLF_dead1p = _GLF_FUZZED(outerProduct(col, vec3(-61.64, 4.9, 3103.9758))[1]);
     {
      float GLF_dead1scale = 1.0;
      float GLF_dead1dist = 0.0;
      for(
          int GLF_dead1i = 1;
          GLF_dead1i < donor_replacementGLF_dead1MENGER_ITERATIONS;
          GLF_dead1i ++
      )
       {
        GLF_dead1dist = max(GLF_dead1dist, - GLF_dead1sdCrossRepScale(donor_replacementGLF_dead1p, GLF_dead1scale));
        GLF_dead1scale *= 3.0;
        {
         vec4 _GLF_outVarBackup_GLF_color;
         if(_GLF_DEAD(false))
          {
           _GLF_color = vec4(135.528, -79.76, 8216.5243, -316.176);
          }
         _GLF_outVarBackup_GLF_color = _GLF_color;
         _GLF_color = vec4(3.1, 277.375, 519.133, 455.996);
         {
          vec4 _GLF_outVarBackup_GLF_color;
          if(_GLF_DEAD(false))
           {
            {
             vec4 _GLF_outVarBackup_GLF_color;
             _GLF_outVarBackup_GLF_color = _GLF_color;
             _GLF_color = vec4(0.7, 4.1, -4.7, 185.705);
             if(_GLF_WRAPPED_IF_TRUE(true))
              {
               _GLF_color = _GLF_outVarBackup_GLF_color;
              }
            }
            _GLF_color = (mat2x4(-662.395, 773.542, -135.526, -8.0, -9.6, 4.1, 9806.3149, 9.7) * vec2(98.58, -5926.6514));
           }
          _GLF_outVarBackup_GLF_color = _GLF_color;
          _GLF_color = vec4(548.827, 0.6, 9.8, 1.5);
          if(_GLF_WRAPPED_IF_TRUE(true))
           {
            if(_GLF_DEAD(false))
             {
              _GLF_color = vec4(5.6, -5023.6579, 3071.0397, -8.3);
              if(_GLF_DEAD(false))
               {
                _GLF_color = vec4(-1184.9002, 666.634, 59.99, -0.2);
               }
             }
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
         }
         {
          if(_GLF_DEAD(false))
           {
            _GLF_color = sqrt(vec4(1614.6978, -64.03, -6.5, -1393.3043));
           }
          vec4 _GLF_outVarBackup_GLF_color;
          _GLF_outVarBackup_GLF_color = _GLF_color;
          if(_GLF_DEAD(_GLF_IDENTITY(false, (_GLF_IDENTITY(false, false || (false))) && true)))
           {
            _GLF_color = asin(abs(vec4(-0.0, 64.26, -745.623, 8.5)));
           }
          _GLF_color = vec4(-2187.1475, 69.28, 4.0, -1.5);
          if(_GLF_WRAPPED_IF_TRUE(true))
           {
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
         }
         if(_GLF_WRAPPED_IF_TRUE(true))
          {
           if(_GLF_DEAD(false))
            {
             _GLF_color = ((uvec2(178068u, 181178u) != uvec2(58147u, 146081u)) ? vec4(1658.0246, -965.048, 857.229, 2.7) : vec4(6.9, -49.01, 7968.8412, 3553.3330));
            }
           _GLF_color = _GLF_outVarBackup_GLF_color;
           {
            vec4 _GLF_outVarBackup_GLF_color;
            _GLF_outVarBackup_GLF_color = _GLF_color;
            _GLF_color = (-8389.1429 + vec4(0.6, -43.19, -95.29, -6538.2072));
            if(_GLF_WRAPPED_IF_TRUE(true))
             {
              _GLF_color = _GLF_outVarBackup_GLF_color;
             }
           }
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
            {
             _GLF_color = vec4(vec2(84.46, -4.6), vec2(-211.571, 711.681));
            }
          }
        }
       }
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < sqrt(0.0)))))
       {
        _GLF_color = uintBitsToFloat(uvec4(171678u, 9592u, 130166u, 124068u));
       }
      GLF_dead1dist;
     }
    }
   {
    vec4 _GLF_outVarBackup_GLF_color;
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = (3.7 / vec4(-0.1, 8.2, -22.03, 349.554));
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        {
         _GLF_color = vec4(-81.01, 4.7, 2594.5789, 6.3);
        }
      }
    }
    _GLF_outVarBackup_GLF_color = _GLF_color;
    if(_GLF_DEAD(false))
     {
      _GLF_color = refract(vec4(-8.3, 4.1, -1.0, -79.88), vec4(0.2, 6.8, 249.078, -78.37), 2162.0425);
     }
    _GLF_color = vec4(3.8, 286.272, -7943.3450, 55.59);
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(20.39, 8694.9902, 8194.3936, 113.026);
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     _GLF_color = vec4(81.06, -1840.4724, 6.3, -289.769);
    }
  }
 col = max(col, 0.);
 fragColor = vec4(clamp(col, 0., 1.), 1);
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   _GLF_color = step(111.342, vec4(-273.881, -6694.0378, -84.23, -98.93));
  }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(-78.95, 0.3, 9.2, -8683.9347);
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
}
void main(void)
{
 iTime = time;
 mainImage(_GLF_color, gl_FragCoord.xy);
}
