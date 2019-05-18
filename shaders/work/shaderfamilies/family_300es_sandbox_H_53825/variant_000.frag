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

struct _GLF_struct_48 {
 bool _f0;
 mat2x3 _f1;
} ;

struct _GLF_struct_49 {
 _GLF_struct_48 _f0;
} ;

struct _GLF_struct_47 {
 bvec2 _f0;
 bool _f1;
 bvec4 _f2;
} ;

struct _GLF_struct_50 {
 vec4 _GLF_outVarBackup_GLF_color;
 mat2x3 _f0;
 mat3 _f1;
 _GLF_struct_47 _f2;
 _GLF_struct_49 _f3;
} ;

struct _GLF_struct_44 {
 bvec3 _f0;
 float GLF_live5r;
} ;

struct _GLF_struct_45 {
 _GLF_struct_44 _f0;
} ;

struct _GLF_struct_42 {
 vec4 _f0;
 uvec4 _f1;
 bool _f2;
} ;

struct _GLF_struct_41 {
 ivec4 _f0;
 vec2 _f1;
 bvec2 _f2;
 ivec4 _f3;
} ;

struct _GLF_struct_43 {
 _GLF_struct_41 _f0;
 _GLF_struct_42 _f1;
} ;

struct _GLF_struct_39 {
 uvec4 _f0;
 mat2x3 _f1;
 mat3x4 _f2;
 uint _f3;
} ;

struct _GLF_struct_40 {
 _GLF_struct_39 _f0;
} ;

struct _GLF_struct_46 {
 _GLF_struct_40 _f0;
 _GLF_struct_43 _f1;
 mat2 _f2;
 _GLF_struct_45 _f3;
} ;

struct _GLF_struct_38 {
 mat3 _f0;
 int GLF_live4i;
 ivec2 _f1;
} ;

struct _GLF_struct_37 {
 vec2 GLF_live6offset_unit_vector;
 mat2x3 _f0;
 mat2 _f1;
} ;

struct _GLF_struct_36 {
 float GLF_live0p;
 bvec3 _f0;
} ;

struct _GLF_struct_33 {
 ivec3 _f0;
 bvec2 _f1;
 mat3x4 _f2;
} ;

struct _GLF_struct_34 {
 _GLF_struct_33 _f0;
} ;

struct _GLF_struct_31 {
 int _f0;
} ;

struct _GLF_struct_30 {
 mat2x4 _f0;
 uint _f1;
} ;

struct _GLF_struct_32 {
 float _f0;
 _GLF_struct_30 _f1;
 mat4x2 _f2;
 _GLF_struct_31 _f3;
 float GLF_live4maxt;
} ;

struct _GLF_struct_35 {
 _GLF_struct_32 _f0;
 _GLF_struct_34 _f1;
} ;

struct _GLF_struct_28 {
 vec3 GLF_live4rd;
 float _f0;
 uint _f1;
} ;

struct _GLF_struct_27 {
 ivec2 _f0;
 ivec3 _f1;
} ;

struct _GLF_struct_29 {
 _GLF_struct_27 _f0;
 uvec4 _f1;
 _GLF_struct_28 _f2;
} ;

struct _GLF_struct_26 {
 vec3 _f0;
 vec3 GLF_live3lin;
 mat3 _f1;
} ;

struct _GLF_struct_23 {
 uvec3 _f0;
 ivec2 _f1;
} ;

struct _GLF_struct_24 {
 _GLF_struct_23 _f0;
 ivec4 _f1;
} ;

struct _GLF_struct_21 {
 mat3x4 _f0;
 mat2x3 _f1;
 mat4 _f2;
 mat3x2 _f3;
} ;

struct _GLF_struct_20 {
 mat2 _f0;
 mat2 _f1;
} ;

struct _GLF_struct_19 {
 bvec2 _f0;
 mat4x3 _f1;
} ;

struct _GLF_struct_22 {
 _GLF_struct_19 _f0;
 _GLF_struct_20 _f1;
 vec4 _f2;
 _GLF_struct_21 _f3;
} ;

struct _GLF_struct_25 {
 _GLF_struct_22 _f0;
 _GLF_struct_24 _f1;
 float GLF_live4h;
} ;

struct _GLF_struct_18 {
 uvec4 _f0;
 ivec2 _f1;
 vec3 roll;
} ;

struct _GLF_struct_16 {
 vec2 s;
 ivec4 _f0;
} ;

struct _GLF_struct_14 {
 mat2x3 _f0;
 mat2 _f1;
 mat4x3 _f2;
 uint _f3;
} ;

struct _GLF_struct_13 {
 mat2 _f0;
 vec3 _f1;
 bvec4 _f2;
 bvec3 _f3;
} ;

struct _GLF_struct_12 {
 mat3 _f0;
 mat2x3 _f1;
} ;

struct _GLF_struct_15 {
 _GLF_struct_12 _f0;
 _GLF_struct_13 _f1;
 _GLF_struct_14 _f2;
} ;

struct _GLF_struct_10 {
 mat4 _f0;
 uvec4 _f1;
 bvec3 _f2;
 int _f3;
} ;

struct _GLF_struct_11 {
 uvec2 _f0;
 ivec3 _f1;
 bvec4 _f2;
 _GLF_struct_10 _f3;
} ;

struct _GLF_struct_17 {
 mat2x4 _f0;
 _GLF_struct_11 _f1;
 _GLF_struct_15 _f2;
 _GLF_struct_16 _f3;
} ;

struct _GLF_struct_7 {
 float _f0;
 mat4x2 _f1;
 mat3x4 _f2;
} ;

struct _GLF_struct_8 {
 mat3x4 _f0;
 mat2 _f1;
 _GLF_struct_7 _f2;
} ;

struct _GLF_struct_5 {
 ivec2 _f0;
 mat2x4 _f1;
} ;

struct _GLF_struct_4 {
 int _f0;
} ;

struct _GLF_struct_3 {
 bvec3 _f0;
 mat3x4 _f1;
 bvec3 _f2;
} ;

struct _GLF_struct_6 {
 _GLF_struct_3 _f0;
 mat3x2 _f1;
 _GLF_struct_4 _f2;
 _GLF_struct_5 _f3;
} ;

struct _GLF_struct_9 {
 _GLF_struct_6 _f0;
 ivec3 _f1;
 float GLF_dead1dist;
 _GLF_struct_8 _f2;
} ;

struct _GLF_struct_0 {
 bool _f0;
 int _f1;
 mat3 _f2;
 uvec4 _f3;
} ;

struct _GLF_struct_1 {
 ivec2 _f0;
 _GLF_struct_0 _f1;
} ;

struct _GLF_struct_2 {
 vec2 h;
 _GLF_struct_1 _f0;
} ;

layout(location = 0) out vec4 _GLF_color;

uniform vec2 injectionSwitch;

uniform float time;

uniform vec2 resolution;

uniform vec2 GLF_dead1mouse;

uniform float GLF_dead2time;

uniform float GLF_live5time;

uniform vec2 GLF_live5mouse;

uniform vec2 GLF_live5resolution;

uniform float GLF_live6time;

uniform vec2 GLF_live6mouse;

uniform vec2 GLF_live6resolution;

float GLF_live4EPSILON = 0.01;

uniform float GLF_live3time;

vec2 GLF_dead7opUnion(vec2 GLF_dead7a, vec2 GLF_dead7b)
{
 return GLF_dead7a.y < GLF_dead7b.y ? GLF_dead7a : GLF_dead7b;
}
float GLF_dead7sphere(vec3 GLF_dead7p, float GLF_dead7r)
{
 return length(GLF_dead7p) - GLF_dead7r;
}
float GLF_dead7box(vec3 GLF_dead7p, vec3 GLF_dead7b)
{
 vec3 GLF_dead7d = abs(GLF_dead7p) - GLF_dead7b;
 return length(max(GLF_dead7d, 0.0)) + min(max(GLF_dead7d.x, max(GLF_dead7d.y, GLF_dead7d.z)), 0.0);
}
float GLF_dead7shape(vec3 GLF_dead7p)
{
 return min(GLF_dead7sphere(GLF_dead7p - vec3(0.0, 1.6, 0.0), 1.0), GLF_dead7box(GLF_dead7p - vec3(0.0, 0.3, 0.0), vec3(0.6, 0.3, 0.6)));
}
vec2 GLF_dead7mapWithMat(vec3 GLF_dead7p)
{
 float GLF_dead7repeat = 5.0;
 vec2 GLF_dead7qxz = mod(GLF_dead7p.xz, GLF_dead7repeat) - 0.5 * GLF_dead7repeat;
 vec3 GLF_dead7q = vec3(GLF_dead7qxz.x, GLF_dead7p.y, GLF_dead7qxz.y);
 return GLF_dead7opUnion(vec2(1.0, GLF_dead7shape(GLF_dead7q)), vec2(0.0, GLF_dead7p.y));
}
float GLF_dead8iTime = 0.0;

vec3 GLF_dead8pal(in float GLF_dead8t, in vec3 GLF_dead8a, in vec3 GLF_dead8b, in vec3 GLF_dead8c, in vec3 GLF_dead8d)
{
 return GLF_dead8a + GLF_dead8b * cos(6.28318 * (GLF_dead8c * GLF_dead8t + GLF_dead8d));
}
vec3 GLF_dead8spectrum(float GLF_dead8n)
{
 return GLF_dead8pal(GLF_dead8n, vec3(0.5, 0.5, 0.5), vec3(0.0, 0.5, 0.5), vec3(.0, 1.0, .0), vec3(0.62, 0.33, 0.37));
}
float GLF_dead8sdSphere(vec3 GLF_dead8p, float GLF_dead8s)
{
 return length(GLF_dead8p) - GLF_dead8s;
}
float GLF_dead8sdUnion_s(float GLF_dead8a, float GLF_dead8b, float GLF_dead8k)
{
 float GLF_dead8h = clamp(0.5 + 0.5 * (GLF_dead8b - GLF_dead8a) / GLF_dead8k, 0.0, 1.0);
 return mix(GLF_dead8b, GLF_dead8a, GLF_dead8h) - GLF_dead8k * GLF_dead8h * (1.0 - GLF_dead8h);
}
vec3 GLF_dead8carToPol(vec3 GLF_dead8p)
{
 float GLF_dead8r = length(GLF_dead8p);
 float GLF_dead8the = acos(GLF_dead8p.z / GLF_dead8r);
 float GLF_dead8phi = atan(GLF_dead8p.y, GLF_dead8p.x);
 return vec3(GLF_dead8r, GLF_dead8the, GLF_dead8phi);
}
mat3 GLF_dead8rotationXY(vec2 GLF_dead8angle)
{
 vec2 GLF_dead8c = cos(GLF_dead8angle);
 vec2 GLF_dead8s = sin(GLF_dead8angle);
 return mat3(GLF_dead8c.y, 0.0, - GLF_dead8s.y, GLF_dead8s.y * GLF_dead8s.x, GLF_dead8c.x, GLF_dead8c.y * GLF_dead8s.x, GLF_dead8s.y * GLF_dead8c.x, - GLF_dead8s.x, GLF_dead8c.y * GLF_dead8c.x);
}
float GLF_dead8sdVerticalCapsule(vec3 GLF_dead8p, float GLF_dead8h, float GLF_dead8r)
{
 GLF_dead8p.z -= clamp(GLF_dead8p.z, 0.0, GLF_dead8h);
 return length(GLF_dead8p) - GLF_dead8r;
}
float GLF_dead8distortedCapsule(vec3 GLF_dead8p)
{
 float GLF_dead8dtime = 1.3 * GLF_dead8p.z - 2.0 * GLF_dead8iTime - 1.;
 float GLF_dead8dt = sin((GLF_dead8dtime) - 0.8 * sin(GLF_dead8dtime));
 GLF_dead8p.x += 0.2 * (GLF_dead8p.z) * GLF_dead8dt;
 float GLF_dead8d = GLF_dead8sdVerticalCapsule(GLF_dead8p - vec3(0.5, 0, 0.1), 2.0, 0.05 * (4.0 - 1.5 * GLF_dead8p.z));
 float GLF_dead8d2 = GLF_dead8sdSphere(GLF_dead8p - vec3(0.5, 0, 2.2), 0.2);
 GLF_dead8d = GLF_dead8sdUnion_s(GLF_dead8d, GLF_dead8d2, 0.1);
 return GLF_dead8d;
}
float GLF_dead8map(vec3 GLF_dead8p)
{
 float GLF_dead8dt = sin((2.0 * GLF_dead8iTime + 2.5) - 0.8 * sin(2.0 * GLF_dead8iTime + 2.5));
 GLF_dead8p.x += 0.2 * GLF_dead8dt;
 float GLF_dead8d0 = GLF_dead8sdSphere(GLF_dead8p - vec3(0.2, 0, 0), 0.4);
 float GLF_dead8d2;
 vec3 GLF_dead8p1;
 for(
     float GLF_dead8i = 0.;
     GLF_dead8i < 9.;
     GLF_dead8i ++
 )
  {
   GLF_dead8p1 = GLF_dead8rotationXY(vec2(GLF_dead8i * 2. * 3.14159265359 / 9., 0.8)) * GLF_dead8p;
   GLF_dead8d2 = GLF_dead8distortedCapsule(GLF_dead8p1);
   GLF_dead8d0 = GLF_dead8sdUnion_s(GLF_dead8d0, GLF_dead8d2, 0.2);
  }
 return GLF_dead8d0;
}
vec3 GLF_dead8gradient(vec3 GLF_dead8pos)
{
 const vec3 GLF_dead8dx = vec3(0.01, 0.0, 0.0);
 const vec3 GLF_dead8dy = vec3(0.0, 0.01, 0.0);
 const vec3 GLF_dead8dz = vec3(0.0, 0.0, 0.01);
 return normalize(vec3(GLF_dead8map(GLF_dead8pos + GLF_dead8dx) - GLF_dead8map(GLF_dead8pos - GLF_dead8dx), GLF_dead8map(GLF_dead8pos + GLF_dead8dy) - GLF_dead8map(GLF_dead8pos - GLF_dead8dy), GLF_dead8map(GLF_dead8pos + GLF_dead8dz) - GLF_dead8map(GLF_dead8pos - GLF_dead8dz)));
}
vec3 GLF_dead8fresnel(vec3 GLF_dead8F0, vec3 GLF_dead8h, vec3 GLF_dead8l)
{
 return GLF_dead8F0 + (1.0 - GLF_dead8F0) * pow(clamp(1.0 - dot(GLF_dead8h, GLF_dead8l), 0.0, 1.0), 5.0);
}
vec3 GLF_dead8selfColor(vec3 GLF_dead8pos)
{
 vec3 GLF_dead8pol = GLF_dead8carToPol(GLF_dead8pos - vec3(0.4, 0, 0));
 return GLF_dead8spectrum(0.45 * GLF_dead8pol.x);
}
vec3 GLF_dead8reflectedColor(in vec3 GLF_dead8p, in vec3 GLF_dead8rd)
{
 vec3 GLF_dead8Ks = vec3(0.7);
 float GLF_dead8shininess = 40.0;
 vec3 GLF_dead8n = GLF_dead8gradient(GLF_dead8p);
 vec3 GLF_dead8ref = reflect(GLF_dead8rd, GLF_dead8n);
 vec3 GLF_dead8rc = vec3(0);
 vec3 GLF_dead8light_pos = vec3(15.0, 20.0, 2.0);
 vec3 GLF_dead8light_color = vec3(1.0, 1.0, 1.0);
 vec3 GLF_dead8vl = normalize(GLF_dead8light_pos - GLF_dead8p);
 vec3 GLF_dead8specular = vec3(max(0.0, dot(GLF_dead8vl, GLF_dead8ref)));
 vec3 GLF_dead8F = GLF_dead8fresnel(GLF_dead8Ks, normalize(GLF_dead8vl - GLF_dead8rd), GLF_dead8vl);
 GLF_dead8specular = pow(GLF_dead8specular, vec3(GLF_dead8shininess));
 GLF_dead8rc += GLF_dead8light_color * GLF_dead8specular;
 return GLF_dead8rc;
}
uniform float GLF_dead5time;

float GLF_dead5hash12(vec2 GLF_dead5p)
{
 vec3 GLF_dead5p3 = fract(vec3(GLF_dead5p.xyx) * .1031);
 GLF_dead5p3 += dot(GLF_dead5p3, GLF_dead5p3.yzx + 19.19);
 return fract((GLF_dead5p3.x + GLF_dead5p3.y) * GLF_dead5p3.z);
}
vec2 GLF_dead5hash22(vec2 GLF_dead5p)
{
 vec3 GLF_dead5p3 = fract(vec3(GLF_dead5p.xyx) * vec3(.1031, .1030, .0973));
 GLF_dead5p3 += dot(GLF_dead5p3, GLF_dead5p3.yzx + 19.19);
 return fract(vec2((GLF_dead5p3.x + GLF_dead5p3.y) * GLF_dead5p3.z, (GLF_dead5p3.x + GLF_dead5p3.z) * GLF_dead5p3.y));
}
bool GLF_dead5intersectPlane(const in vec3 GLF_dead5ro, const in vec3 GLF_dead5rd, const in float GLF_dead5height, out float GLF_dead5dist)
{
 if(GLF_dead5rd.y == 0.0)
  {
   return false;
  }
 float GLF_dead5d = - (GLF_dead5ro.y - GLF_dead5height) / GLF_dead5rd.y;
 GLF_dead5d = min(100000.0, GLF_dead5d);
 if(GLF_dead5d > 0.)
  {
   GLF_dead5dist = GLF_dead5d;
   return true;
  }
 return false;
}
vec2 GLF_dead5iSphere(const in vec3 GLF_dead5ro, const in vec3 GLF_dead5rd, const in vec4 GLF_dead5sp, const in vec3 GLF_dead5ve, out vec3 GLF_dead5nor)
{
 float GLF_dead5t = - 1.0;
 float GLF_dead5s = 0.0;
 GLF_dead5nor = vec3(0.0);
 vec3 GLF_dead5rc = GLF_dead5ro - GLF_dead5sp.xyz;
 float GLF_dead5A = dot(GLF_dead5rc, GLF_dead5rd);
 float GLF_dead5B = dot(GLF_dead5rc, GLF_dead5rc) - GLF_dead5sp.w * GLF_dead5sp.w;
 float GLF_dead5C = dot(GLF_dead5ve, GLF_dead5ve);
 float GLF_dead5D = dot(GLF_dead5rc, GLF_dead5ve);
 float GLF_dead5E = dot(GLF_dead5rd, GLF_dead5ve);
 float GLF_dead5aab = GLF_dead5A * GLF_dead5A - GLF_dead5B;
 float GLF_dead5eec = GLF_dead5E * GLF_dead5E - GLF_dead5C;
 float GLF_dead5aed = GLF_dead5A * GLF_dead5E - GLF_dead5D;
 float GLF_dead5k = GLF_dead5aed * GLF_dead5aed - GLF_dead5eec * GLF_dead5aab;
 if(GLF_dead5k > 0.0)
  {
   GLF_dead5k = sqrt(GLF_dead5k);
   float GLF_dead5hb = (GLF_dead5aed - GLF_dead5k) / GLF_dead5eec;
   float GLF_dead5ha = (GLF_dead5aed + GLF_dead5k) / GLF_dead5eec;
   float GLF_dead5ta = max(0.0, GLF_dead5ha);
   float GLF_dead5tb = min(1.0, GLF_dead5hb);
   if(GLF_dead5ta < GLF_dead5tb)
    {
     GLF_dead5ta = 0.5 * (GLF_dead5ta + GLF_dead5tb);
     GLF_dead5t = - (GLF_dead5A - GLF_dead5E * GLF_dead5ta) - sqrt((GLF_dead5A - GLF_dead5E * GLF_dead5ta) * (GLF_dead5A - GLF_dead5E * GLF_dead5ta) - (GLF_dead5B + GLF_dead5C * GLF_dead5ta * GLF_dead5ta - 2.0 * GLF_dead5D * GLF_dead5ta));
     GLF_dead5nor = normalize((GLF_dead5ro + GLF_dead5rd * GLF_dead5t) - (GLF_dead5sp.xyz + GLF_dead5ta * GLF_dead5ve));
     GLF_dead5s = 2.0 * (GLF_dead5tb - GLF_dead5ta);
    }
  }
 return vec2(GLF_dead5t, GLF_dead5s);
}
vec3 GLF_dead5lig = normalize(vec3(- 0.6, 0.7, - 0.5));

vec3 GLF_dead5shade(const in float GLF_dead5d, in vec3 GLF_dead5col, const in float GLF_dead5shadow, const in vec3 GLF_dead5nor, const in vec3 GLF_dead5ref, const in vec3 GLF_dead5sky)
{
 float GLF_dead5amb = max(0., 0.5 + 0.5 * GLF_dead5nor.y);
 float GLF_dead5dif = max(0., dot(normalize(GLF_dead5nor), GLF_dead5lig));
 float GLF_dead5spe = pow(clamp(dot(normalize(GLF_dead5ref), GLF_dead5lig), 0.0, 1.0), 16.0);
 GLF_dead5dif *= GLF_dead5shadow;
 vec3 GLF_dead5lin = 1.20 * GLF_dead5dif * vec3(1.00, 0.85, 0.55);
 GLF_dead5lin += 0.50 * GLF_dead5amb * vec3(0.50, 0.70, 1.00);
 GLF_dead5col = GLF_dead5col * GLF_dead5lin;
 GLF_dead5col += GLF_dead5spe * GLF_dead5dif;
 GLF_dead5col = mix(GLF_dead5col, GLF_dead5sky, smoothstep(260. * .8, 260., GLF_dead5d));
 return GLF_dead5col;
}
void GLF_dead5getSphereOffset(const in vec2 GLF_dead5grid, inout vec2 GLF_dead5center)
{
 GLF_dead5center = (GLF_dead5hash22(GLF_dead5grid) - vec2(0.5)) * (7.);
}
void GLF_dead5getMovingSpherePosition(const in vec2 GLF_dead5grid, const in vec2 GLF_dead5sphereOffset, inout vec4 GLF_dead5center, inout vec3 GLF_dead5speed)
{
 float GLF_dead5s = 0.3 + GLF_dead5hash12(GLF_dead5grid);
 float GLF_dead5t = 14. * GLF_dead5s + GLF_dead5time / GLF_dead5s;
 float GLF_dead5y = GLF_dead5s * 30. * abs(cos(GLF_dead5t));
 GLF_dead5speed = vec3(0, 30. * abs(sin(GLF_dead5t)), 0) * (1. / 30.);
 vec2 GLF_dead5offset = GLF_dead5grid + GLF_dead5sphereOffset;
 GLF_dead5center = vec4(GLF_dead5offset.x + 0.5 * 10., 1. + GLF_dead5y, GLF_dead5offset.y + 0.5 * 10., 1.);
}
void GLF_dead5getSpherePosition(const in vec2 GLF_dead5grid, const in vec2 GLF_dead5sphereOffset, inout vec4 GLF_dead5center)
{
 vec2 GLF_dead5offset = GLF_dead5grid + GLF_dead5sphereOffset;
 GLF_dead5center = vec4(GLF_dead5offset.x + 0.5 * 10., 1., GLF_dead5offset.y + 0.5 * 10., 1.);
}
vec3 GLF_dead5getSphereColor(vec2 GLF_dead5grid)
{
 float GLF_dead5m = GLF_dead5hash12(GLF_dead5grid.yx) * 12.;
 return vec3(1. - GLF_dead5m * 0.08, GLF_dead5m * 0.03, GLF_dead5m * 0.06);
}
vec2 GLF_live4opUnion(vec2 GLF_live4a, vec2 GLF_live4b)
{
 return GLF_live4a.y < GLF_live4b.y ? GLF_live4a : GLF_live4b;
}
float GLF_live4sphere(vec3 GLF_live4p, float GLF_live4r)
{
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = min(vec4(-5.3, 8652.8607, -9.0, -7.2), (-3.0 - vec4(4.9, 642.950, -1.9, -22.35)));
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
   {
    if(_GLF_DEAD(false))
     {
      const vec3 donor_replacementGLF_dead5cameraSpeed = _GLF_FUZZED((vec3(1.3, 65.62, -94.71)));
      vec3 donor_replacementGLF_dead5colBackground = _GLF_FUZZED(GLF_live4p);
      vec3 donor_replacementGLF_dead5lig = _GLF_FUZZED(atan(GLF_live4p));
      vec3 donor_replacementGLF_dead5nor = _GLF_FUZZED(vec3(16.93, 25.25, 4.6));
      vec2 donor_replacementGLF_dead5offset = _GLF_FUZZED(vec2(-59.37, -8.4));
      const vec3 donor_replacementGLF_dead5rd = _GLF_FUZZED(vec3(-990.440, 9554.7167, 5610.4372));
      vec3 donor_replacementGLF_dead5ref = _GLF_FUZZED(exp(vec3(695.425, 96.99, -2808.1102)));
      const vec3 donor_replacementGLF_dead5ro = _GLF_FUZZED((vec3(383.172, 41.98, -472.948) / vec3(-9.5, 9484.0597, -8.9)));
      const mat3 donor_replacementGLF_dead5rot = _GLF_FUZZED(mat3(mat3x2(-68.74)));
      vec3 donor_replacementGLF_dead5sky = _GLF_FUZZED(mat4x3(-231.456, 398.984, 9.5, -1280.9675, 0.6, 5624.5686, -4003.3078, -531.867, -68.75, 749.716, -636.030, -332.939)[3]);
      vec3 donor_replacementGLF_dead5speed = _GLF_FUZZED(vec3(-1975.1962, -75.99, 18.27));
      vec4 donor_replacementGLF_dead5sphereCenter = _GLF_FUZZED(min(_GLF_outVarBackup_GLF_color, _GLF_color[1]));
      vec3 donor_replacementGLF_dead5sphereSpeed = _GLF_FUZZED(min(GLF_live4p, GLF_live4r));
      if(GLF_dead5intersectPlane(donor_replacementGLF_dead5ro, donor_replacementGLF_dead5rd, 0., GLF_live4EPSILON))
       {
        vec3 GLF_dead5interSectionPoint = donor_replacementGLF_dead5ro + donor_replacementGLF_dead5rd * GLF_live4EPSILON;
        donor_replacementGLF_dead5speed = donor_replacementGLF_dead5rot * (GLF_dead5interSectionPoint.xyz - donor_replacementGLF_dead5ro) + donor_replacementGLF_dead5cameraSpeed;
        vec2 GLF_dead5c1 = mod(GLF_dead5interSectionPoint.xz * .25, vec2(2.));
        float GLF_dead5w = (abs(fract(GLF_dead5c1.x * abs(donor_replacementGLF_dead5rd.x)) - .5) + abs(fract(GLF_dead5c1.y * abs(donor_replacementGLF_dead5rd.y)) - .5));
        donor_replacementGLF_dead5colBackground = mix(mod(floor(GLF_dead5c1.x) + floor(GLF_dead5c1.y), 2.) < 1. ? vec3(0.4) : vec3(.6), vec3(.5), clamp((GLF_dead5w + .8) * .007 * length(donor_replacementGLF_dead5speed.xz) * 30., 0., 1.));
        float GLF_dead5shadow = 0.;
        vec3 GLF_dead5shadowStartPos = GLF_dead5interSectionPoint - donor_replacementGLF_dead5lig;
        vec2 GLF_dead5shadowGridPos = floor((donor_replacementGLF_dead5ro + donor_replacementGLF_dead5rd * GLF_live4EPSILON).xz / 10.);
        for(
            float GLF_dead5x = - 1.;
            GLF_dead5x <= 1.;
            GLF_dead5x ++
        )
         {
          for(
              float GLF_dead5y = - 1.;
              GLF_dead5y <= 1.;
              GLF_dead5y ++
          )
           {
            vec2 GLF_dead5gridpos = (GLF_dead5shadowGridPos + vec2(GLF_dead5x, GLF_dead5y)) * 10.;
            GLF_dead5getSphereOffset(GLF_dead5gridpos, donor_replacementGLF_dead5offset);
            GLF_dead5getMovingSpherePosition(GLF_dead5gridpos, - donor_replacementGLF_dead5offset, donor_replacementGLF_dead5sphereCenter, donor_replacementGLF_dead5sphereSpeed);
            vec2 GLF_dead5res = GLF_dead5iSphere(GLF_dead5shadowStartPos, donor_replacementGLF_dead5lig, donor_replacementGLF_dead5sphereCenter, donor_replacementGLF_dead5sphereSpeed + donor_replacementGLF_dead5cameraSpeed, donor_replacementGLF_dead5nor);
            if(GLF_dead5res.x > 0.0)
             {
              GLF_dead5shadow = clamp(GLF_dead5shadow + mix(GLF_dead5res.y, 0., GLF_dead5res.x / 20.), 0., 1.);
             }
            GLF_dead5getSpherePosition(GLF_dead5gridpos, donor_replacementGLF_dead5offset, donor_replacementGLF_dead5sphereCenter);
            GLF_dead5res = GLF_dead5iSphere(GLF_dead5shadowStartPos, donor_replacementGLF_dead5lig, donor_replacementGLF_dead5sphereCenter, donor_replacementGLF_dead5cameraSpeed, donor_replacementGLF_dead5nor);
            if(GLF_dead5res.x > 0.0)
             {
              GLF_dead5shadow = clamp(GLF_dead5shadow + mix(GLF_dead5res.y, 0., GLF_dead5res.x / 20.), 0., 1.);
             }
           }
         }
        donor_replacementGLF_dead5ref = reflect(donor_replacementGLF_dead5rd, vec3(0., 1., 0.));
        donor_replacementGLF_dead5colBackground = GLF_dead5shade(GLF_live4EPSILON, donor_replacementGLF_dead5colBackground, 1. - GLF_dead5shadow, vec3(0., 1., 0.), donor_replacementGLF_dead5ref, donor_replacementGLF_dead5sky);
       }
      else
       {
        donor_replacementGLF_dead5colBackground = donor_replacementGLF_dead5sky;
       }
     }
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 return length(GLF_live4p) - GLF_live4r;
}
float GLF_live4box(vec3 GLF_live4p, vec3 GLF_live4b)
{
 vec3 GLF_live4d = abs(GLF_live4p) - GLF_live4b;
 return length(max(GLF_live4d, 0.0)) + min(max(GLF_live4d.x, max(GLF_live4d.y, GLF_live4d.z)), 0.0);
}
float GLF_live4shape(vec3 GLF_live4p)
{
 return min(GLF_live4sphere(GLF_live4p - vec3(0.0, 1.6, 0.0), 1.0), GLF_live4box(GLF_live4p - vec3(0.0, 0.3, 0.0), vec3(0.6, 0.3, 0.6)));
 {
  if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_ZERO(0.0, injectionSwitch.x)))))
   {
    vec2 donor_replacementGLF_dead6b = _GLF_FUZZED(GLF_dead1mouse);
    float donor_replacementGLF_dead6p = _GLF_FUZZED(GLF_live4EPSILON);
    {
     donor_replacementGLF_dead6b.y -= donor_replacementGLF_dead6p;
    }
   }
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = mat3x4(3.8, -1.7, -225.728, -3.7, 167.111, -464.036, 2.2, 83.75, 3746.9101, 8671.3886, 7315.6538, 6.7)[0];
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    if(_GLF_DEAD(false))
     {
      vec2 donor_replacementGLF_dead6b = _GLF_FUZZED(GLF_live6mouse);
      float donor_replacementGLF_dead6c = _GLF_FUZZED(GLF_live6time);
      float donor_replacementGLF_dead6p = _GLF_FUZZED(GLF_dead2time);
      for(
          float GLF_dead6i = 16.0;
          GLF_dead6i >= 1.0;
          GLF_dead6i -= 1.0
      )
       {
        donor_replacementGLF_dead6p = pow(2.0, GLF_dead6i);
        if((donor_replacementGLF_dead6p < donor_replacementGLF_dead6b.x) ^^ (donor_replacementGLF_dead6p < donor_replacementGLF_dead6b.y))
         {
          donor_replacementGLF_dead6c += donor_replacementGLF_dead6p;
         }
        if(donor_replacementGLF_dead6p < donor_replacementGLF_dead6b.x)
         {
          donor_replacementGLF_dead6b.x -= donor_replacementGLF_dead6p;
         }
        if(donor_replacementGLF_dead6p < donor_replacementGLF_dead6b.y)
         {
          donor_replacementGLF_dead6b.y -= donor_replacementGLF_dead6p;
         }
       }
     }
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   vec3 donor_replacementGLF_dead5nor = _GLF_FUZZED(GLF_live4p);
   const vec3 donor_replacementGLF_dead5rd = _GLF_FUZZED(vec3(-8.9, -380.412, 7.2));
   const vec3 donor_replacementGLF_dead5ro = _GLF_FUZZED(vec3(-71.64, -3.0, 5.7));
   const vec4 donor_replacementGLF_dead5sp = _GLF_FUZZED(vec4(-0.5, -209.909, -27.79, 4447.3461));
   const vec3 donor_replacementGLF_dead5ve = _GLF_FUZZED(vec3(1.9, -6979.5757, -5.8));
   {
    float GLF_dead5t = - 1.0;
    float GLF_dead5s = 0.0;
    donor_replacementGLF_dead5nor = vec3(0.0);
    vec3 GLF_dead5rc = donor_replacementGLF_dead5ro - donor_replacementGLF_dead5sp.xyz;
    float GLF_dead5A = dot(GLF_dead5rc, donor_replacementGLF_dead5rd);
    float GLF_dead5B = dot(GLF_dead5rc, GLF_dead5rc) - donor_replacementGLF_dead5sp.w * donor_replacementGLF_dead5sp.w;
    float GLF_dead5C = dot(donor_replacementGLF_dead5ve, donor_replacementGLF_dead5ve);
    float GLF_dead5D = dot(GLF_dead5rc, donor_replacementGLF_dead5ve);
    float GLF_dead5E = dot(donor_replacementGLF_dead5rd, donor_replacementGLF_dead5ve);
    float GLF_dead5aab = GLF_dead5A * GLF_dead5A - GLF_dead5B;
    float GLF_dead5eec = GLF_dead5E * GLF_dead5E - GLF_dead5C;
    float GLF_dead5aed = GLF_dead5A * GLF_dead5E - GLF_dead5D;
    float GLF_dead5k = GLF_dead5aed * GLF_dead5aed - GLF_dead5eec * GLF_dead5aab;
    if(GLF_dead5k > 0.0)
     {
      GLF_dead5k = sqrt(GLF_dead5k);
      float GLF_dead5hb = (GLF_dead5aed - GLF_dead5k) / GLF_dead5eec;
      float GLF_dead5ha = (GLF_dead5aed + GLF_dead5k) / GLF_dead5eec;
      float GLF_dead5ta = max(0.0, GLF_dead5ha);
      float GLF_dead5tb = min(1.0, GLF_dead5hb);
      if(GLF_dead5ta < GLF_dead5tb)
       {
        GLF_dead5ta = 0.5 * (GLF_dead5ta + GLF_dead5tb);
        GLF_dead5t = - (GLF_dead5A - GLF_dead5E * GLF_dead5ta) - sqrt((GLF_dead5A - GLF_dead5E * GLF_dead5ta) * (GLF_dead5A - GLF_dead5E * GLF_dead5ta) - (GLF_dead5B + GLF_dead5C * GLF_dead5ta * GLF_dead5ta - 2.0 * GLF_dead5D * GLF_dead5ta));
        donor_replacementGLF_dead5nor = normalize((donor_replacementGLF_dead5ro + donor_replacementGLF_dead5rd * GLF_dead5t) - (donor_replacementGLF_dead5sp.xyz + GLF_dead5ta * donor_replacementGLF_dead5ve));
        GLF_dead5s = 2.0 * (GLF_dead5tb - GLF_dead5ta);
       }
     }
    vec2(GLF_dead5t, GLF_dead5s);
   }
  }
}
vec2 GLF_live4mapWithMat(vec3 GLF_live4p)
{
 if(_GLF_DEAD(false))
  return vec2(1.0);
 float GLF_live4repeat = 5.0;
 vec2 GLF_live4qxz = mod(GLF_live4p.xz, GLF_live4repeat) - 0.5 * GLF_live4repeat;
 vec3 GLF_live4q = vec3(GLF_live4qxz.x, GLF_live4p.y, GLF_live4qxz.y);
 return GLF_live4opUnion(vec2(1.0, GLF_live4shape(GLF_live4q)), vec2(0.0, GLF_live4p.y));
}
float GLF_live4map(vec3 GLF_live4p)
{
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < _GLF_IDENTITY(0.0, (0.0) * 1.0)))))
  return 1.0;
 return GLF_live4mapWithMat(GLF_live4p).y;
}
vec3 GLF_live4estimateNormal(vec3 GLF_live4p)
{
 return normalize(vec3(GLF_live4map(vec3(GLF_live4p.x + GLF_live4EPSILON, GLF_live4p.y, GLF_live4p.z)) - GLF_live4map(vec3(GLF_live4p.x - GLF_live4EPSILON, GLF_live4p.y, GLF_live4p.z)), GLF_live4map(vec3(GLF_live4p.x, GLF_live4p.y + GLF_live4EPSILON, GLF_live4p.z)) - GLF_live4map(vec3(GLF_live4p.x, GLF_live4p.y - GLF_live4EPSILON, GLF_live4p.z)), GLF_live4map(vec3(GLF_live4p.x, GLF_live4p.y, GLF_live4p.z + GLF_live4EPSILON)) - GLF_live4map(vec3(GLF_live4p.x, GLF_live4p.y, GLF_live4p.z - GLF_live4EPSILON))));
}
float GLF_live4softshadow(vec3 GLF_live4ro, vec3 GLF_live4rd, float GLF_live4mint, float GLF_live4maxt, float GLF_live4k)
{
 float GLF_live4t = GLF_live4mint;
 float GLF_live4res = 1.0;
 {
  int GLF_live4_looplimiter0 = 0;
  for(
      int GLF_live4i = 0;
      GLF_live4i < 200;
      GLF_live4i ++
  )
   {
    if(GLF_live4_looplimiter0 >= 6)
     {
      break;
     }
    GLF_live4_looplimiter0 ++;
    _GLF_struct_25 _GLF_struct_replacement_25 = _GLF_struct_25(_GLF_struct_22(_GLF_struct_19(bvec2(true), mat4x3(1.0)), _GLF_struct_20(mat2(1.0), mat2(1.0)), vec4(1.0), _GLF_struct_21(mat3x4(1.0), mat2x3(1.0), mat4(1.0), mat3x2(1.0))), _GLF_struct_24(_GLF_struct_23(uvec3(1u), ivec2(1)), ivec4(1)), GLF_live4map(GLF_live4ro + GLF_live4rd * GLF_live4t));
    if(_GLF_DEAD(false))
     continue;
    if(_GLF_struct_replacement_25.GLF_live4h < GLF_live4EPSILON)
     {
      return 0.0;
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
       break;
     }
    GLF_live4res = min(GLF_live4res, GLF_live4k * _GLF_struct_replacement_25.GLF_live4h / GLF_live4t);
    GLF_live4t += _GLF_struct_replacement_25.GLF_live4h;
    if(GLF_live4t >= GLF_live4maxt)
     {
      break;
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
       continue;
     }
   }
 }
 return GLF_live4res;
}
float GLF_live3dBox(vec3 GLF_live3p, vec3 GLF_live3b)
{
 vec3 GLF_live3d = abs(GLF_live3p) - GLF_live3b;
 return min(max(GLF_live3d.x, max(GLF_live3d.y, GLF_live3d.z)), 0.0) + length(max(GLF_live3d, 0.0)) - 0.2;
}
vec2 GLF_live3rep(inout vec2 GLF_live3p, vec2 GLF_live3o)
{
 vec2 GLF_live3c = floor((GLF_live3p + GLF_live3o) / (GLF_live3o * 2.0));
 GLF_live3p = mod(GLF_live3p + GLF_live3o, GLF_live3o * 2.00) - GLF_live3o;
 return GLF_live3c;
}
vec2 GLF_live3map(vec3 GLF_live3p)
{
 GLF_live3p.y += 1.0;
 vec2 GLF_live3c = GLF_live3rep(GLF_live3p.xz, vec2(.7));
 return vec2(GLF_live3dBox(GLF_live3p, vec3(.5, 1.0 + 0.27 * cos(GLF_live3c.x * GLF_live3time + 1.0 * GLF_live3c.x + 3.0 * GLF_live3c.y), .5)), abs(GLF_live3c.x + GLF_live3c.y));
}
vec3 GLF_live3normal(vec3 GLF_live3p)
{
 vec2 GLF_live3h = vec2(0.01, 0.0);
 vec3 GLF_live3n = vec3(GLF_live3map(GLF_live3p + GLF_live3h.xyy).x - GLF_live3map(GLF_live3p - GLF_live3h.xyy).x, GLF_live3map(GLF_live3p + GLF_live3h.yxy).x - GLF_live3map(GLF_live3p - GLF_live3h.yxy).x, GLF_live3map(GLF_live3p + GLF_live3h.yyx).x - GLF_live3map(GLF_live3p - GLF_live3h.yyx).x);
 return normalize(GLF_live3n);
}
vec3 GLF_live3lighting(vec3 GLF_live3p, vec3 GLF_live3l, vec3 GLF_live3rd)
{
 vec3 GLF_live3lig = normalize(GLF_live3l);
 vec3 GLF_live3n = GLF_live3normal(GLF_live3p);
 vec3 GLF_live3ref = reflect(GLF_live3lig, GLF_live3n);
 float GLF_live3amb = 1.0 * clamp((GLF_live3p.y + 0.25) * 1.2, 0.0, 1.0);
 float GLF_live3dif = clamp(dot(GLF_live3n, GLF_live3lig), 0.0, 1.0);
 float GLF_live3spe = pow(clamp(dot(GLF_live3ref, GLF_live3rd), 0.0, 1.0), 52.0);
 _GLF_struct_26 _GLF_struct_replacement_26 = _GLF_struct_26(vec3(1.0), vec3(0), mat3(1.0));
 _GLF_struct_replacement_26.GLF_live3lin += GLF_live3amb;
 _GLF_struct_replacement_26.GLF_live3lin += GLF_live3dif * vec3(.3, .27, .25);
 _GLF_struct_replacement_26.GLF_live3lin += 2.0 * GLF_live3spe * vec3(1, .97, .1) * GLF_live3dif;
 return _GLF_struct_replacement_26.GLF_live3lin;
}
float GLF_dead2dBox(vec3 GLF_dead2p, vec3 GLF_dead2b)
{
 if(_GLF_DEAD(false))
  return 1.0;
 vec3 GLF_dead2d = abs(GLF_dead2p) - GLF_dead2b;
 return min(max(GLF_dead2d.x, max(GLF_dead2d.y, GLF_dead2d.z)), 0.0) + length(max(GLF_dead2d, 0.0)) - 0.2;
}
vec2 GLF_dead2rep(inout vec2 GLF_dead2p, vec2 GLF_dead2o)
{
 vec2 GLF_dead2c = floor((GLF_dead2p + GLF_dead2o) / (GLF_dead2o * 2.0));
 GLF_dead2p = mod(GLF_dead2p + GLF_dead2o, GLF_dead2o * 2.00) - GLF_dead2o;
 return GLF_dead2c;
}
vec2 GLF_dead2map(vec3 GLF_dead2p)
{
 GLF_dead2p.y += 1.0;
 vec2 GLF_dead2c = GLF_dead2rep(GLF_dead2p.xz, vec2(.7));
 return vec2(GLF_dead2dBox(GLF_dead2p, vec3(.5, 1.0 + 0.27 * cos(GLF_dead2c.x * GLF_dead2time + 1.0 * GLF_dead2c.x + 3.0 * GLF_dead2c.y), .5)), abs(GLF_dead2c.x + GLF_dead2c.y));
 if(_GLF_DEAD(false))
  return vec2(1.0);
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
   if(abs(GLF_dead2s.x) < 0.001)
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      continue;
     return vec2(GLF_dead2td, GLF_dead2s.y);
    }
   GLF_dead2td += GLF_dead2s.x * .5;
  }
 return vec2(10.0, - 1.0);
}
vec3 GLF_dead2normal(vec3 GLF_dead2p)
{
 vec2 GLF_dead2h = vec2(0.01, 0.0);
 vec3 GLF_dead2n = vec3(GLF_dead2map(GLF_dead2p + GLF_dead2h.xyy).x - GLF_dead2map(GLF_dead2p - GLF_dead2h.xyy).x, GLF_dead2map(GLF_dead2p + GLF_dead2h.yxy).x - GLF_dead2map(GLF_dead2p - GLF_dead2h.yxy).x, GLF_dead2map(GLF_dead2p + GLF_dead2h.yyx).x - GLF_dead2map(GLF_dead2p - GLF_dead2h.yyx).x);
 return normalize(GLF_dead2n);
}
vec3 GLF_dead2lighting(vec3 GLF_dead2p, vec3 GLF_dead2l, vec3 GLF_dead2rd)
{
 vec3 GLF_dead2lig = normalize(GLF_dead2l);
 vec3 GLF_dead2n = GLF_dead2normal(GLF_dead2p);
 vec3 GLF_dead2ref = reflect(GLF_dead2lig, GLF_dead2n);
 float GLF_dead2amb = 1.0 * clamp((GLF_dead2p.y + 0.25) * 1.2, 0.0, 1.0);
 float GLF_dead2dif = clamp(dot(GLF_dead2n, GLF_dead2lig), 0.0, 1.0);
 float GLF_dead2spe = pow(clamp(dot(GLF_dead2ref, GLF_dead2rd), 0.0, 1.0), 52.0);
 vec3 GLF_dead2lin = vec3(0);
 GLF_dead2lin += GLF_dead2amb;
 if(_GLF_DEAD(false))
  {
   {
    0.0;
   }
  }
 GLF_dead2lin += GLF_dead2dif * vec3(.3, .27, .25);
 GLF_dead2lin += 2.0 * GLF_dead2spe * vec3(1, .97, .1) * GLF_dead2dif;
 return GLF_dead2lin;
}
mat3 GLF_dead2camera(vec3 GLF_dead2e, vec3 GLF_dead2la)
{
 vec3 GLF_dead2roll = vec3(0, 1, 0);
 vec3 GLF_dead2f = normalize(GLF_dead2la - GLF_dead2e);
 vec3 GLF_dead2r = normalize(cross(GLF_dead2roll, GLF_dead2f));
 vec3 GLF_dead2u = normalize(cross(GLF_dead2f, GLF_dead2r));
 return mat3(GLF_dead2r, GLF_dead2u, GLF_dead2f);
}
vec2 GLF_dead3rand2(vec2 GLF_dead3seed)
{
 return vec2(fract(sin(dot(GLF_dead3seed.xy, vec2(12.9898, 78.233))) * 43758.5453), fract(cos(dot(GLF_dead3seed.xy, vec2(4.898, 7.23))) * 23421.631));
}
float GLF_dead3fit01(float GLF_dead3a, float GLF_dead3b, float GLF_dead3x)
{
 return (clamp(GLF_dead3x, GLF_dead3a, GLF_dead3b) - GLF_dead3a) / (GLF_dead3b - GLF_dead3a);
}
float GLF_dead3circle(vec2 GLF_dead3uv, float GLF_dead3r)
{
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  return 1.0;
 return - (length(GLF_dead3uv) - GLF_dead3r);
}
vec2 GLF_dead3anim1(float GLF_dead3anim)
{
 float GLF_dead3len = 3.14159265 * .14 + .11 * 2. + 3.14159265 * .14 + .11 * 2.;
 vec2 GLF_dead3cc = vec2(.14, .11);
 float GLF_dead3theta;
 float GLF_dead3a1 = GLF_dead3fit01(.0, .22 / GLF_dead3len, fract(GLF_dead3anim));
 float GLF_dead3a2 = GLF_dead3fit01(.22 / GLF_dead3len, (.22 + 3.14159265 * .14) / GLF_dead3len, fract(GLF_dead3anim));
 float GLF_dead3a3 = GLF_dead3fit01((.22 + 3.14159265 * .14) / GLF_dead3len, (.44 + 3.14159265 * .14) / GLF_dead3len, fract(GLF_dead3anim));
 float GLF_dead3a4 = GLF_dead3fit01((.44 + 3.14159265 * .14) / GLF_dead3len, 1., fract(GLF_dead3anim));
 GLF_dead3theta = 3.14159265 * GLF_dead3a2;
 vec2 GLF_dead3cc2 = vec2(.0, .11) + .14 * vec2(cos(GLF_dead3theta), sin(GLF_dead3theta));
 GLF_dead3theta = 3.14159265 + 3.14159265 * GLF_dead3a4;
 vec2 GLF_dead3cc4 = vec2(.0, - .11) + .14 * vec2(cos(GLF_dead3theta), sin(GLF_dead3theta));
 vec2 GLF_dead3cc1 = vec2(.14, - .11) + GLF_dead3a1 * vec2(0., .22);
 vec2 GLF_dead3cc3 = vec2(- .14, .11) + GLF_dead3a3 * vec2(0., - .22);
 GLF_dead3cc = mix(GLF_dead3cc1, GLF_dead3cc2, step(0.01, GLF_dead3a2));
 GLF_dead3cc = mix(GLF_dead3cc, GLF_dead3cc3, step(0.01, GLF_dead3a3));
 GLF_dead3cc = mix(GLF_dead3cc, GLF_dead3cc4, step(0.01, GLF_dead3a4));
 return GLF_dead3cc;
}
float GLF_dead0sdCross(vec3 GLF_dead0p)
{
 GLF_dead0p = abs(GLF_dead0p);
 vec3 GLF_dead0d = vec3(max(GLF_dead0p.x, GLF_dead0p.y + 0.07), max(GLF_dead0p.y, GLF_dead0p.z), max(GLF_dead0p.z, GLF_dead0p.x));
 return min(GLF_dead0d.x, min(GLF_dead0d.y, GLF_dead0d.z)) - (1.0 / 2.23);
}
float GLF_dead0sdCrossRep(vec3 GLF_dead0p)
{
 vec3 GLF_dead0q = mod(GLF_dead0p + 1.0, 2.0) - 1.0;
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  return 1.0;
 return GLF_dead0sdCross(GLF_dead0q);
}
float GLF_dead0sdCrossRepScale(vec3 GLF_dead0p, float GLF_dead0s)
{
 return GLF_dead0sdCrossRep(GLF_dead0p * GLF_dead0s) / GLF_dead0s;
}
float GLF_dead1dist_plane(vec3 GLF_dead1pos, vec3 GLF_dead1point, vec3 GLF_dead1norm)
{
 return dot(GLF_dead1point - GLF_dead1pos, normalize(GLF_dead1norm));
}
float GLF_dead1dist_ground(vec3 GLF_dead1pos)
{
 return GLF_dead1pos.y;
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = uintBitsToFloat(uvec4(120613u));
  {
   float GLF_live3td = _GLF_FUZZED(-617.835);
   vec3 GLF_live3rd = _GLF_FUZZED(vec3(-7.4, 1062.8635, 8.1));
   vec3 GLF_live3ro = _GLF_FUZZED((vec3(-188.656, -1274.3074, -1972.8929) / (2.6 - vec3(-7700.9850, 55.54, 4.7))));
   int GLF_live3_looplimiter0 = 0;
   {
    if(GLF_live3_looplimiter0 >= 4)
     {
      ;
     }
    GLF_live3_looplimiter0 ++;
    if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
     return 1.0;
    vec2 GLF_live3s = GLF_live3map(GLF_live3ro + GLF_live3rd * GLF_live3td);
    if(_GLF_DEAD(false))
     return 1.0;
    if(abs(GLF_live3s.x) < 0.001)
     {
      if(_GLF_DEAD(_GLF_IDENTITY(false, (false) && true)))
       {
        {
         ;
        }
       }
      vec2(GLF_live3td, GLF_live3s.y);
     }
    GLF_live3td += GLF_live3s.x * .5;
   }
  }
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
  if(_GLF_DEAD(false))
   return 1.0;
 }
}
float GLF_dead1dist_func(vec3 GLF_dead1pos)
{
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  return 1.0;
 if(_GLF_DEAD(false))
  {
   float donor_replacementGLF_dead5alpha = _GLF_FUZZED(-8.6);
   vec3 donor_replacementGLF_dead5nor = _GLF_FUZZED(vec3(GLF_live6time, sin(resolution)));
   vec2 donor_replacementGLF_dead5offset = _GLF_FUZZED(((GLF_live5mouse * mat2(935.505, 2.3, -61.96, -3560.7095)) * pow(GLF_live5mouse, vec2(1815.7538, -311.022))));
   const vec3 donor_replacementGLF_dead5rd = _GLF_FUZZED(vec3(7560.2157, -288.900, -1962.6924));
   vec2 donor_replacementGLF_dead5res = _GLF_FUZZED(GLF_live5mouse);
   vec3 donor_replacementGLF_dead5sky = _GLF_FUZZED(vec3(0.7, -8536.6268, 1290.9383));
   if(donor_replacementGLF_dead5res.x > 0.0)
    {
     GLF_dead1pos = reflect(donor_replacementGLF_dead5rd, donor_replacementGLF_dead5nor);
     vec3 GLF_dead5lcol = GLF_dead5shade(donor_replacementGLF_dead5res.x, GLF_dead5getSphereColor(- donor_replacementGLF_dead5offset), 1., donor_replacementGLF_dead5nor, GLF_dead1pos, donor_replacementGLF_dead5sky);
     GLF_dead1pos += GLF_dead5lcol * donor_replacementGLF_dead5res.y * donor_replacementGLF_dead5alpha;
     donor_replacementGLF_dead5alpha *= (1. - donor_replacementGLF_dead5res.y);
    }
  }
 vec3 GLF_dead1cent = vec3((GLF_dead1mouse - vec2(.5, 0.)) * vec2(12., 3.), 0.) + vec3(0., 1.2, 7.);
 float GLF_dead1plane1 = GLF_dead1dist_plane(GLF_dead1pos, vec3(0., 0.2, 25.), vec3(1., 1., 1.));
 float GLF_dead1plane2 = GLF_dead1dist_plane(GLF_dead1pos, vec3(0., 0., 25.), vec3(- 1., 0.1, 1.));
 float GLF_dead1ground = GLF_dead1dist_ground(GLF_dead1pos);
 _GLF_struct_9 _GLF_struct_replacement_9 = _GLF_struct_9(_GLF_struct_6(_GLF_struct_3(bvec3(true), mat3x4(1.0), bvec3(true)), mat3x2(1.0), _GLF_struct_4(1), _GLF_struct_5(ivec2(1), mat2x4(1.0))), ivec3(1), min(GLF_dead1plane1, GLF_dead1plane2), _GLF_struct_8(mat3x4(1.0), mat2(1.0), _GLF_struct_7(1.0, mat4x2(1.0), mat3x4(1.0))));
 _GLF_struct_replacement_9.GLF_dead1dist = min(_GLF_struct_replacement_9.GLF_dead1dist, GLF_dead1ground);
 return _GLF_struct_replacement_9.GLF_dead1dist;
 if(_GLF_DEAD(false))
  return 1.0;
}
float GLF_live1hash12(vec2 GLF_live1p)
{
 vec3 GLF_live1p3 = fract(vec3(GLF_live1p.xyx) * .1031);
 if(_GLF_DEAD(false))
  return 1.0;
 GLF_live1p3 += dot(GLF_live1p3, GLF_live1p3.yzx + 19.19);
 if(_GLF_DEAD(_GLF_IDENTITY(false, (false) || false)))
  return 1.0;
 return fract((GLF_live1p3.x + GLF_live1p3.y) * GLF_live1p3.z);
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = atan(asin(vec4(70.01, 9.5, -6.6, 659.863)), vec4(1313.3746, 1.6, -26.44, 597.847));
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
     return 1.0;
   }
 }
 if(_GLF_DEAD(false))
  return 1.0;
}
float dBox(vec3 p, vec3 b)
{
 if(_GLF_DEAD(false))
  return 1.0;
 vec3 d = abs(p) - b;
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  return 1.0;
 if(_GLF_DEAD(_GLF_IDENTITY(false, false || (false))))
  {
   vec3 donor_replacementGLF_dead8p = _GLF_FUZZED((GLF_live5time * inversesqrt(p)));
   {
    float GLF_dead8r = length(donor_replacementGLF_dead8p);
    float GLF_dead8the = acos(donor_replacementGLF_dead8p.z / GLF_dead8r);
    float GLF_dead8phi = atan(donor_replacementGLF_dead8p.y, donor_replacementGLF_dead8p.x);
    vec3(GLF_dead8r, GLF_dead8the, GLF_dead8phi);
   }
  }
 return min(max(d.x, max(d.y, d.z)), 0.0) + length(max(d, 0.0)) - 0.2;
}
vec2 rep(inout vec2 p, vec2 o)
{
 {
  float GLF_live3td = _GLF_FUZZED((-7.4));
  vec3 GLF_live3rd = _GLF_FUZZED(vec3(1.2, 6855.7683, 352.634));
  vec3 GLF_live3ro = _GLF_FUZZED(vec4(5522.2115, 46.02, 7846.4383, -0.4).zxx);
  int GLF_live3_looplimiter0 = 0;
  {
   if(GLF_live3_looplimiter0 >= 4)
    {
     ;
    }
   GLF_live3_looplimiter0 ++;
   vec2 GLF_live3s = GLF_live3map(GLF_live3ro + GLF_live3rd * GLF_live3td);
   if(abs(GLF_live3s.x) < 0.001)
    vec2(GLF_live3td, GLF_live3s.y);
   GLF_live3td += GLF_live3s.x * .5;
  }
  if(_GLF_DEAD(false))
   return vec2(1.0);
 }
 vec2 c = floor((p + o) / (o * 2.0));
 p = mod(p + o, o * 2.00) - o;
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(-7.3, 528.743, 5.2, 4.9);
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 return c;
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = mod(vec4(931.521, 6727.5520, 528.238, -54.46), vec4(7.6, 7.2, -15.41, -93.68));
  if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(true, (true ? true : _GLF_FUZZED(true)))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
  if(_GLF_DEAD(false))
   {
    {
     false;
    }
   }
 }
 {
  _GLF_struct_29 _GLF_struct_replacement_29 = _GLF_struct_29(_GLF_struct_27(ivec2(1), ivec3(1)), uvec4(1u), _GLF_struct_28(_GLF_FUZZED(vec3(486.184, -1.2, -8566.0740)), 1.0, 1u));
  float GLF_live4t = _GLF_FUZZED(-7.4);
  float GLF_live4res = _GLF_FUZZED(vec4(59.62, 8.4, 57.25, -262.829).b);
  if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
   return vec2(1.0);
  float GLF_live4EPSILON = _GLF_FUZZED(-99.51);
  float GLF_live4k = _GLF_FUZZED(9.5);
  _GLF_struct_35 _GLF_struct_replacement_35 = _GLF_struct_35(_GLF_struct_32(1.0, _GLF_struct_30(mat2x4(1.0), 1u), mat4x2(1.0), _GLF_struct_31(1), _GLF_FUZZED((9.5))), _GLF_struct_34(_GLF_struct_33(ivec3(1), bvec2(true), mat3x4(1.0))));
  int GLF_live4_looplimiter0 = 0;
  vec3 GLF_live4ro = _GLF_FUZZED(vec3(90.38, -5.2, 9.6));
  {
   if(GLF_live4_looplimiter0 >= 6)
    {
     ;
     if(_GLF_DEAD(false))
      {
       float donor_replacementGLF_dead6c = _GLF_FUZZED(cos(exp(time)));
       mediump vec4 donor_replacementGLF_dead6gl_FragColor = _GLF_FUZZED(clamp(vec4(5024.7018, 7.3, -561.915, -673.058), _GLF_color, vec4(-437.680, 5.4, -8.9, 9898.2771)));
       mediump vec4 donor_replacementGLF_dead6gl_FragCoord = _GLF_FUZZED(cos((GLF_live5time * (vec4(-73.63, -8.9, 8.5, -5811.7400) + _GLF_color))));
       float donor_replacementGLF_dead6p = _GLF_FUZZED(GLF_live3time);
       vec2 donor_replacementGLF_dead6resolution = _GLF_FUZZED(p);
       {
        vec2 GLF_dead6uv = donor_replacementGLF_dead6gl_FragCoord.xy / donor_replacementGLF_dead6resolution.xy;
        float GLF_dead6scale = donor_replacementGLF_dead6resolution.x / donor_replacementGLF_dead6resolution.y;
        GLF_dead6uv = GLF_dead6uv - 0.5;
        GLF_dead6uv.y /= GLF_dead6scale;
        c = GLF_dead6uv * 256.0 + 256.0;
        donor_replacementGLF_dead6c = 0.0;
        for(
            float GLF_dead6i = 16.0;
            GLF_dead6i >= 1.0;
            GLF_dead6i -= 1.0
        )
         {
          donor_replacementGLF_dead6p = pow(2.0, GLF_dead6i);
          if((donor_replacementGLF_dead6p < c.x) ^^ (donor_replacementGLF_dead6p < c.y))
           {
            donor_replacementGLF_dead6c += donor_replacementGLF_dead6p;
           }
          if(donor_replacementGLF_dead6p < c.x)
           {
            c.x -= donor_replacementGLF_dead6p;
           }
          if(donor_replacementGLF_dead6p < c.y)
           {
            c.y -= donor_replacementGLF_dead6p;
           }
         }
        donor_replacementGLF_dead6c = mod(donor_replacementGLF_dead6c / 128.0, 1.0);
        GLF_live4ro = vec3(sin(donor_replacementGLF_dead6c + GLF_dead6uv.x * cos(GLF_dead6uv.y * 1.2)), tan(donor_replacementGLF_dead6c + GLF_dead6uv.y - 0.3) * 1.1, cos(donor_replacementGLF_dead6c - GLF_dead6uv.y + 0.9));
        donor_replacementGLF_dead6gl_FragColor = vec4(GLF_live4ro, 1.0);
       }
      }
    }
   GLF_live4_looplimiter0 ++;
   float GLF_live4h = GLF_live4map(GLF_live4ro + _GLF_struct_replacement_29._f2.GLF_live4rd * GLF_live4t);
   if(GLF_live4h < GLF_live4EPSILON)
    {
     0.0;
    }
   GLF_live4res = min(GLF_live4res, GLF_live4k * GLF_live4h / GLF_live4t);
   GLF_live4t += GLF_live4h;
   if(GLF_live4t >= _GLF_struct_replacement_35._f0.GLF_live4maxt)
    {
     ;
    }
  }
 }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < tan(0.0)))))
  {
   float donor_replacementGLF_dead8d0 = _GLF_FUZZED(dot(vec3(-5.9, -2404.1898, 2.5), vec3(-5.8, 7862.8614, -449.009)));
   float donor_replacementGLF_dead8d2 = _GLF_FUZZED(GLF_live3time);
   float donor_replacementGLF_dead8i = _GLF_FUZZED(GLF_dead2time);
   vec3 donor_replacementGLF_dead8p = _GLF_FUZZED(vec3(813.980, -4.4, 9.6));
   vec3 donor_replacementGLF_dead8p1 = _GLF_FUZZED(vec3(-8441.5785, 5240.2238, -1.6));
   {
    donor_replacementGLF_dead8p1 = GLF_dead8rotationXY(vec2(donor_replacementGLF_dead8i * 2. * 3.14159265359 / 9., 0.8)) * donor_replacementGLF_dead8p;
    donor_replacementGLF_dead8d2 = GLF_dead8distortedCapsule(donor_replacementGLF_dead8p1);
    donor_replacementGLF_dead8d0 = GLF_dead8sdUnion_s(donor_replacementGLF_dead8d0, donor_replacementGLF_dead8d2, 0.2);
   }
  }
}
vec2 map(vec3 p)
{
 p.y += 1.0;
 vec2 c = rep(p.xz, vec2(.7));
 return vec2(dBox(p, vec3(.5, 1.0 + 0.27 * cos(c.x * time + 1.0 * c.x + 3.0 * c.y), .5)), abs(c.x + c.y));
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
   _GLF_struct_17 _GLF_struct_replacement_17 = _GLF_struct_17(mat2x4(1.0), _GLF_struct_11(uvec2(1u), ivec3(1), bvec4(true), _GLF_struct_10(mat4(1.0), uvec4(1u), bvec3(true), 1)), _GLF_struct_15(_GLF_struct_12(mat3(1.0), mat2x3(1.0)), _GLF_struct_13(mat2(1.0), vec3(1.0), bvec4(true), bvec3(true)), _GLF_struct_14(mat2x3(1.0), mat2(1.0), mat4x3(1.0), 1u)), _GLF_struct_16(map(ro + rd * td), ivec4(1)));
   if(abs(_GLF_struct_replacement_17._f3.s.x) < 0.001)
    return vec2(td, _GLF_struct_replacement_17._f3.s.y);
   if(_GLF_DEAD(false))
    continue;
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = vec4(-4053.1670, -2.1, 5.8, 9.9);
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
    if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
     continue;
   }
   td += _GLF_struct_replacement_17._f3.s.x * .5;
   {
    mediump vec4 GLF_live5gl_FragColor = _GLF_FUZZED((vec2(6.0, -5.5) * mat4x2(-10.91, 52.36, -4.0, -7906.0886, 33.41, 37.64, 4551.1385, -5.0)));
    mediump vec4 GLF_live5gl_FragCoord = _GLF_FUZZED(((vec4(26.00, 7198.7277, 4.4, -5.1) * (vec4(2.4, 6.9, 4.6, 332.455) - 4.0)) + 1.5));
    {
     vec2 GLF_live5pos = (GLF_live5gl_FragCoord.xy / GLF_live5resolution.xy) + GLF_live5mouse / 1.1;
     float GLF_live5x = fract(sin(GLF_live5pos.x) * 9. + sin(GLF_live5pos.x * 122. + 10.5) * 3. + sin(GLF_live5pos.x * 100. + 0.2) * 99.);
     float GLF_live5y = sin(GLF_live5pos.y) * 15. + sin(GLF_live5pos.x * 22. + GLF_live5time) * 0.5 + sin(GLF_live5pos.x * 8. + 0.2) * 2.;
     float GLF_live5r = fract(GLF_live5y + sin(GLF_live5pos.x + GLF_live5time));
     float GLF_live5b = fract(GLF_live5y);
     GLF_live5gl_FragColor = vec4(GLF_live5r, smoothstep(GLF_live5r, 2.03, .3) * .7, smoothstep(GLF_live5b, 0.05, .34), 1.0);
    }
   }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     vec2 donor_replacementGLF_dead6b = _GLF_FUZZED(GLF_live6resolution);
     float donor_replacementGLF_dead6p = _GLF_FUZZED(normalize(GLF_live4EPSILON));
     for(
         float GLF_dead6i = 16.0;
         GLF_dead6i >= 1.0;
         GLF_dead6i -= 1.0
     )
      {
       donor_replacementGLF_dead6p = pow(2.0, GLF_dead6i);
       if((donor_replacementGLF_dead6p < donor_replacementGLF_dead6b.x) ^^ (donor_replacementGLF_dead6p < donor_replacementGLF_dead6b.y))
        {
         td += donor_replacementGLF_dead6p;
        }
       if(donor_replacementGLF_dead6p < donor_replacementGLF_dead6b.x)
        {
         donor_replacementGLF_dead6b.x -= donor_replacementGLF_dead6p;
        }
       if(donor_replacementGLF_dead6p < donor_replacementGLF_dead6b.y)
        {
         donor_replacementGLF_dead6b.y -= donor_replacementGLF_dead6p;
        }
      }
    }
   {
    if(_GLF_DEAD(false))
     {
      vec2 donor_replacementGLF_dead2o = _GLF_FUZZED(injectionSwitch);
      vec2 donor_replacementGLF_dead2p = _GLF_FUZZED(sqrt((false ? inversesqrt(injectionSwitch) : resolution)));
      {
       vec2 GLF_dead2c = floor((donor_replacementGLF_dead2p + donor_replacementGLF_dead2o) / (donor_replacementGLF_dead2o * 2.0));
       donor_replacementGLF_dead2p = mod(donor_replacementGLF_dead2p + donor_replacementGLF_dead2o, donor_replacementGLF_dead2o * 2.00) - donor_replacementGLF_dead2o;
       if(_GLF_DEAD(false))
        discard;
       if(_GLF_DEAD(_GLF_IDENTITY(false, (false) && _GLF_TRUE(true, (gl_FragCoord.x >= 0.0)))))
        {
         {
          0.0;
         }
        }
       return GLF_dead2c;
      }
     }
    if(_GLF_DEAD(false))
     {
      float donor_replacementGLF_dead7EPSILON = _GLF_FUZZED(fract(intBitsToFloat(471)));
      float donor_replacementGLF_dead7depth = _GLF_FUZZED((-- td));
      int donor_replacementGLF_dead7i = _GLF_FUZZED(71391);
      float donor_replacementGLF_dead7mat = _GLF_FUZZED((true ? GLF_live4EPSILON : td));
      vec3 donor_replacementGLF_dead7orig = _GLF_FUZZED(vec3(GLF_dead2time, GLF_dead2time, GLF_live4EPSILON));
      {
       vec3 GLF_dead7pos = donor_replacementGLF_dead7orig + donor_replacementGLF_dead7depth * rd;
       vec2 GLF_dead7q = GLF_dead7mapWithMat(GLF_dead7pos);
       if(GLF_dead7q.y < donor_replacementGLF_dead7EPSILON)
        {
         donor_replacementGLF_dead7mat = GLF_dead7q.x;
         break;
        }
       donor_replacementGLF_dead7depth += GLF_dead7q.y;
       if(donor_replacementGLF_dead7i == 199)
        {
         donor_replacementGLF_dead7depth = 1000.0;
        }
      }
     }
    {
     {
      vec3(1.0);
     }
    }
    _GLF_struct_36 _GLF_struct_replacement_36 = _GLF_struct_36(_GLF_FUZZED((540.270 / -5881.2786)), bvec3(true));
    {
     if(_GLF_DEAD(false))
      return vec2(1.0);
     mediump vec4 GLF_live6gl_FragCoord = _GLF_FUZZED(vec4(-8160.9034, -86.51, -3.2, 356.199));
     mediump vec4 GLF_live6gl_FragColor = _GLF_FUZZED(vec4(1.0, 4.0, -4510.5423, -4.2));
     if(_GLF_DEAD(false))
      {
       float donor_replacementGLF_dead5dist = _GLF_FUZZED(length(rd));
       if(GLF_live4EPSILON > 0.)
        {
         donor_replacementGLF_dead5dist = GLF_live4EPSILON;
         true;
        }
      }
     {
      vec3 GLF_live6color;
      float GLF_live6len;
      float GLF_live6t = GLF_live6time;
      vec2 GLF_live6uv = GLF_live6gl_FragCoord.xy / GLF_live6resolution;
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < abs(sin(0.0))))))
       {
        float donor_replacementGLF_dead5shadow = _GLF_FUZZED(time);
        {
         donor_replacementGLF_dead5shadow = clamp(donor_replacementGLF_dead5shadow + mix(GLF_live6uv.y, 0., GLF_live6uv.x / 20.), 0., 1.);
        }
       }
      vec2 GLF_live6offset = GLF_live6uv;
      GLF_live6offset -= .5;
      GLF_live6offset.x *= GLF_live6resolution.x / GLF_live6resolution.y;
      GLF_live6len = length(GLF_live6offset);
      GLF_live6t += 0.07;
      _GLF_struct_37 _GLF_struct_replacement_37 = _GLF_struct_37(GLF_live6offset / GLF_live6len, mat2x3(1.0), mat2(1.0));
      float GLF_live6firstMod = sin(GLF_live6t) + 1.0;
      float GLF_live6secondMod = abs(sin(GLF_live6len * 9.0 - GLF_live6t * 2.0));
      GLF_live6uv += _GLF_struct_replacement_37.GLF_live6offset_unit_vector * GLF_live6firstMod * GLF_live6secondMod + GLF_live6mouse * 2.;
      GLF_live6color[0] = .01 / length(abs(fract(GLF_live6uv) - .5));
      GLF_live6offset.x *= GLF_live6resolution.x / GLF_live6resolution.y;
      GLF_live6len = length(GLF_live6offset);
      GLF_live6t += 0.07;
      _GLF_struct_replacement_37.GLF_live6offset_unit_vector = GLF_live6offset / GLF_live6len;
      GLF_live6firstMod = sin(GLF_live6t) + 1.0;
      GLF_live6secondMod = abs(sin(GLF_live6len * 9.0 - GLF_live6t * 2.0));
      GLF_live6uv += _GLF_struct_replacement_37.GLF_live6offset_unit_vector * GLF_live6firstMod * GLF_live6secondMod + GLF_live6mouse * 2.;
      GLF_live6color[1] = .01 / length(abs(fract(GLF_live6uv) - .5));
      GLF_live6gl_FragColor = vec4(GLF_live6color / .1, GLF_live6time);
     }
    }
    vec2 GLF_live0b = _GLF_FUZZED(vec2(-2412.3650, -9.7));
    {
     vec4 _GLF_outVarBackup_GLF_color;
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      {
       {
        vec3(1.0);
       }
      }
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = vec4(-3.6, -286.558, -44.28, 3306.7140);
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
    if(_GLF_struct_replacement_36.GLF_live0p < GLF_live0b.x)
     {
      GLF_live0b.x -= _GLF_struct_replacement_36.GLF_live0p;
     }
   }
  }
 {
  {
   vec3(1.0);
  }
 }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < sin(_GLF_ZERO(0.0, injectionSwitch.x))))))
  return vec2(1.0);
 if(_GLF_DEAD(false))
  return vec2(1.0);
 {
  if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
   return vec2(1.0);
  if(_GLF_DEAD(false))
   {
    float donor_replacementGLF_dead8aD = _GLF_FUZZED(GLF_live3time);
    vec3 donor_replacementGLF_dead8col = _GLF_FUZZED(rd);
    float donor_replacementGLF_dead8layers = _GLF_FUZZED(normalize(GLF_live5time));
    vec3 donor_replacementGLF_dead8rd = _GLF_FUZZED(rd);
    vec3 donor_replacementGLF_dead8sp = _GLF_FUZZED(ro);
    float donor_replacementGLF_dead8t = _GLF_FUZZED(GLF_dead2time);
    if(donor_replacementGLF_dead8aD > 0.)
     {
      vec3 GLF_dead8sc = GLF_dead8selfColor(donor_replacementGLF_dead8sp);
      donor_replacementGLF_dead8col += 8. * GLF_dead8sc * (donor_replacementGLF_dead8aD * donor_replacementGLF_dead8aD * (3. - 2. * donor_replacementGLF_dead8aD) / (1. + donor_replacementGLF_dead8t * donor_replacementGLF_dead8t * 0.85));
      donor_replacementGLF_dead8col += 1.0 * GLF_dead8reflectedColor(donor_replacementGLF_dead8sp, donor_replacementGLF_dead8rd);
      donor_replacementGLF_dead8layers ++;
     }
   }
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(5.8, 674.792, -129.732, -9.2);
  {
   vec4 _GLF_outVarBackup_GLF_color;
   _GLF_outVarBackup_GLF_color = _GLF_color;
   _GLF_color = vec4(641.018, 122.953, 69.92, -422.498);
   if(_GLF_WRAPPED_IF_TRUE(true))
    {
     _GLF_color = _GLF_outVarBackup_GLF_color;
    }
  }
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
    if(_GLF_DEAD(false))
     return vec2(1.0);
    if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
     {
      vec2 donor_replacementGLF_dead6b = _GLF_FUZZED(GLF_live5mouse);
      float donor_replacementGLF_dead6p = _GLF_FUZZED(time);
      if(donor_replacementGLF_dead6p < donor_replacementGLF_dead6b.y)
       {
        donor_replacementGLF_dead6b.y -= donor_replacementGLF_dead6p;
       }
     }
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = intBitsToFloat((-60144 ^ clamp(ivec4(-82289, 10603, 59478, 37530), 45240, -84113)));
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= sin(0.0)))))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
   }
  {
   mediump vec4 GLF_live6gl_FragCoord = _GLF_FUZZED(vec4(-1.7, 8.2, -822.584, -9521.4461));
   mediump vec4 GLF_live6gl_FragColor = _GLF_FUZZED((- vec4(-81.68, -0.2, 2246.4853, -537.061)));
   {
    vec3 GLF_live6color;
    float GLF_live6len;
    float GLF_live6t = GLF_live6time;
    vec2 GLF_live6uv = GLF_live6gl_FragCoord.xy / GLF_live6resolution;
    vec2 GLF_live6offset = GLF_live6uv;
    GLF_live6offset -= .5;
    GLF_live6offset.x *= GLF_live6resolution.x / GLF_live6resolution.y;
    GLF_live6len = length(GLF_live6offset);
    GLF_live6t += 0.07;
    vec2 GLF_live6offset_unit_vector = GLF_live6offset / GLF_live6len;
    float GLF_live6firstMod = sin(GLF_live6t) + 1.0;
    float GLF_live6secondMod = abs(sin(GLF_live6len * 9.0 - GLF_live6t * 2.0));
    GLF_live6uv += GLF_live6offset_unit_vector * GLF_live6firstMod * GLF_live6secondMod + GLF_live6mouse * 2.;
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
     return vec2(1.0);
    GLF_live6color[0] = .01 / length(abs(fract(GLF_live6uv) - .5));
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = vec4(-96.57, -3.3, -78.34, 2.4);
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
    GLF_live6offset.x *= GLF_live6resolution.x / GLF_live6resolution.y;
    GLF_live6len = length(GLF_live6offset);
    GLF_live6t += 0.07;
    GLF_live6offset_unit_vector = GLF_live6offset / GLF_live6len;
    GLF_live6firstMod = sin(GLF_live6t) + 1.0;
    GLF_live6secondMod = abs(sin(GLF_live6len * 9.0 - GLF_live6t * 2.0));
    GLF_live6uv += GLF_live6offset_unit_vector * GLF_live6firstMod * GLF_live6secondMod + GLF_live6mouse * 2.;
    GLF_live6color[1] = .01 / length(abs(fract(GLF_live6uv) - .5));
    GLF_live6gl_FragColor = vec4(GLF_live6color / .1, GLF_live6time);
   }
  }
 }
 return vec2(10.0, - 1.0);
}
vec3 normal(vec3 p)
{
 _GLF_struct_2 _GLF_struct_replacement_2 = _GLF_struct_2(vec2(0.01, 0.0), _GLF_struct_1(ivec2(1), _GLF_struct_0(true, 1, mat3(1.0), uvec4(1u))));
 vec3 n = vec3(map(p + _GLF_struct_replacement_2.h.xyy).x - map(p - _GLF_struct_replacement_2.h.xyy).x, map(p + _GLF_struct_replacement_2.h.yxy).x - map(p - _GLF_struct_replacement_2.h.yxy).x, map(p + _GLF_struct_replacement_2.h.yyx).x - map(p - _GLF_struct_replacement_2.h.yyx).x);
 if(_GLF_DEAD(false))
  {
   float donor_replacementGLF_dead3i = _GLF_FUZZED(time);
   if(_GLF_DEAD(false))
    return vec3(1.0);
   float donor_replacementGLF_dead3mask = _GLF_FUZZED(time);
   if(_GLF_DEAD(false))
    return vec3(1.0);
   vec2 donor_replacementGLF_dead3uv = _GLF_FUZZED((time - vec2(6.2, 9.3)));
   {
    vec2 GLF_dead3r = GLF_dead3rand2(vec2(donor_replacementGLF_dead3i, .167));
    if(_GLF_DEAD(false))
     return vec3(1.0);
    vec2 GLF_dead3cc = GLF_dead3anim1(time * .05 + donor_replacementGLF_dead3i + .01 * (GLF_dead3r.x - .5));
    donor_replacementGLF_dead3mask = max(donor_replacementGLF_dead3mask, GLF_dead3circle(donor_replacementGLF_dead3uv - GLF_dead3cc, mix(.045, .05, GLF_dead3r.y)));
   }
   {
    vec3 GLF_live4p = _GLF_FUZZED(vec3(-1487.8416, 8.9, 6.0));
    {
     float GLF_live4repeat = 5.0;
     vec2 GLF_live4qxz = mod(GLF_live4p.xz, GLF_live4repeat) - 0.5 * GLF_live4repeat;
     vec3 GLF_live4q = vec3(GLF_live4qxz.x, GLF_live4p.y, GLF_live4qxz.y);
     GLF_live4opUnion(vec2(1.0, GLF_live4shape(GLF_live4q)), vec2(0.0, GLF_live4p.y));
    }
   }
  }
 return normalize(n);
 if(_GLF_DEAD(false))
  return vec3(1.0);
}
vec3 lighting(vec3 p, vec3 l, vec3 rd)
{
 {
  mediump vec4 GLF_live6gl_FragCoord = _GLF_FUZZED(vec4(-5.7, 1.5, 660.935, -8.4));
  mediump vec4 GLF_live6gl_FragColor = _GLF_FUZZED(vec4(-6.5, 6865.6731, 392.677, -789.592));
  {
   vec3 GLF_live6color;
   float GLF_live6len;
   float GLF_live6t = GLF_live6time;
   vec2 GLF_live6uv = GLF_live6gl_FragCoord.xy / GLF_live6resolution;
   vec2 GLF_live6offset = GLF_live6uv;
   GLF_live6offset -= .5;
   GLF_live6offset.x *= GLF_live6resolution.x / GLF_live6resolution.y;
   GLF_live6len = length(GLF_live6offset);
   GLF_live6t += 0.07;
   vec2 GLF_live6offset_unit_vector = GLF_live6offset / GLF_live6len;
   float GLF_live6firstMod = sin(GLF_live6t) + 1.0;
   float GLF_live6secondMod = abs(sin(GLF_live6len * 9.0 - GLF_live6t * 2.0));
   GLF_live6uv += GLF_live6offset_unit_vector * GLF_live6firstMod * GLF_live6secondMod + GLF_live6mouse * 2.;
   GLF_live6color[0] = .01 / length(abs(fract(GLF_live6uv) - .5));
   GLF_live6offset.x *= GLF_live6resolution.x / GLF_live6resolution.y;
   GLF_live6len = length(GLF_live6offset);
   GLF_live6t += 0.07;
   GLF_live6offset_unit_vector = GLF_live6offset / GLF_live6len;
   GLF_live6firstMod = sin(GLF_live6t) + 1.0;
   if(_GLF_DEAD(false))
    return vec3(1.0);
   GLF_live6secondMod = abs(sin(GLF_live6len * 9.0 - GLF_live6t * 2.0));
   GLF_live6uv += GLF_live6offset_unit_vector * GLF_live6firstMod * GLF_live6secondMod + GLF_live6mouse * 2.;
   GLF_live6color[1] = .01 / length(abs(fract(GLF_live6uv) - .5));
   if(_GLF_DEAD(false))
    return vec3(1.0);
   GLF_live6gl_FragColor = vec4(GLF_live6color / .1, GLF_live6time);
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = vec4(-839.961, -1306.8246, 3.1, -9.0);
    if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
    if(_GLF_DEAD(false))
     return vec3(1.0);
   }
  }
 }
 {
  {
   mediump vec4 GLF_live6gl_FragCoord = _GLF_FUZZED((1234.2470 - vec4(-436.753, 8.9, 79.04, 7.9)));
   mediump vec4 GLF_live6gl_FragColor = _GLF_FUZZED(vec4(vec3(-6.1, -7425.2026, 78.62), -9212.6684));
   {
    vec3 GLF_live6color;
    if(_GLF_DEAD(false))
     return vec3(1.0);
    float GLF_live6len;
    float GLF_live6t = GLF_live6time;
    vec2 GLF_live6uv = GLF_live6gl_FragCoord.xy / GLF_live6resolution;
    vec2 GLF_live6offset = GLF_live6uv;
    GLF_live6offset -= .5;
    GLF_live6offset.x *= GLF_live6resolution.x / GLF_live6resolution.y;
    GLF_live6len = length(GLF_live6offset);
    GLF_live6t += 0.07;
    vec2 GLF_live6offset_unit_vector = GLF_live6offset / GLF_live6len;
    float GLF_live6firstMod = sin(GLF_live6t) + 1.0;
    float GLF_live6secondMod = abs(sin(GLF_live6len * 9.0 - GLF_live6t * 2.0));
    GLF_live6uv += GLF_live6offset_unit_vector * GLF_live6firstMod * GLF_live6secondMod + GLF_live6mouse * 2.;
    GLF_live6color[0] = .01 / length(abs(fract(GLF_live6uv) - .5));
    if(_GLF_DEAD(false))
     return vec3(1.0);
    GLF_live6offset.x *= GLF_live6resolution.x / GLF_live6resolution.y;
    GLF_live6len = length(GLF_live6offset);
    GLF_live6t += 0.07;
    GLF_live6offset_unit_vector = GLF_live6offset / GLF_live6len;
    GLF_live6firstMod = sin(GLF_live6t) + 1.0;
    GLF_live6secondMod = abs(sin(GLF_live6len * 9.0 - GLF_live6t * 2.0));
    GLF_live6uv += GLF_live6offset_unit_vector * GLF_live6firstMod * GLF_live6secondMod + GLF_live6mouse * 2.;
    GLF_live6color[1] = .01 / length(abs(fract(GLF_live6uv) - .5));
    GLF_live6gl_FragColor = vec4(GLF_live6color / .1, GLF_live6time);
   }
  }
  if(_GLF_DEAD(false))
   return vec3(1.0);
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(82.70, 8.7, -4.4, -532.924);
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 if(_GLF_DEAD(false))
  return vec3(1.0);
 vec3 lig = normalize(l);
 {
  vec3 GLF_live3rd = _GLF_FUZZED(vec3(float(77285), -529.403, (5748.2167 * (-5963.6500 + 8373.2583))));
  vec3 GLF_live3l = _GLF_FUZZED(vec3(vec4(6929.6823, 3.6, 6363.6473, -117.412)));
  vec3 GLF_live3p = _GLF_FUZZED((vec4(4650.2229, 17.48, 8543.6124, 5.7) * mat3x4(-15.33, -864.446, -1525.9757, 3.1, 96.06, 47.98, -84.73, 8.7, -3659.0743, 66.00, 7934.6787, -2.3)));
  {
   vec3 GLF_live3lig = normalize(GLF_live3l);
   vec3 GLF_live3n = GLF_live3normal(GLF_live3p);
   vec3 GLF_live3ref = reflect(GLF_live3lig, GLF_live3n);
   float GLF_live3amb = 1.0 * clamp((GLF_live3p.y + 0.25) * 1.2, 0.0, 1.0);
   float GLF_live3dif = clamp(dot(GLF_live3n, GLF_live3lig), 0.0, 1.0);
   float GLF_live3spe = pow(clamp(dot(GLF_live3ref, GLF_live3rd), 0.0, 1.0), 52.0);
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    return vec3(1.0);
   vec3 GLF_live3lin = vec3(0);
   GLF_live3lin += GLF_live3amb;
   GLF_live3lin += GLF_live3dif * vec3(.3, .27, .25);
   GLF_live3lin += 2.0 * GLF_live3spe * vec3(1, .97, .1) * GLF_live3dif;
   GLF_live3lin;
  }
  {
   vec4 _GLF_outVarBackup_GLF_color;
   _GLF_outVarBackup_GLF_color = _GLF_color;
   _GLF_color = (vec4(-5700.2565, -1.4, 112.444, 20.14));
   if(_GLF_DEAD(false))
    {
     float donor_replacementGLF_dead8aD = _GLF_FUZZED(0.6);
     float donor_replacementGLF_dead8d = _GLF_FUZZED(normalize(GLF_live5time));
     float donor_replacementGLF_dead8layers = _GLF_FUZZED(6.4);
     vec3 donor_replacementGLF_dead8rd = _GLF_FUZZED(lig);
     float donor_replacementGLF_dead8t = _GLF_FUZZED(GLF_live4EPSILON);
     {
      if(donor_replacementGLF_dead8layers > 12. || GLF_live3l.g > 1.0 || donor_replacementGLF_dead8t > 8.)
       ;
      p = GLF_live3p + donor_replacementGLF_dead8rd * donor_replacementGLF_dead8t;
      donor_replacementGLF_dead8d = GLF_dead8map(p);
      donor_replacementGLF_dead8aD = (GLF_live4EPSILON - abs(donor_replacementGLF_dead8d)) / GLF_live4EPSILON;
      if(donor_replacementGLF_dead8aD > 0.)
       {
        vec3 GLF_dead8sc = GLF_dead8selfColor(p);
        GLF_live3l += 8. * GLF_dead8sc * (donor_replacementGLF_dead8aD * donor_replacementGLF_dead8aD * (3. - 2. * donor_replacementGLF_dead8aD) / (1. + donor_replacementGLF_dead8t * donor_replacementGLF_dead8t * 0.85));
        GLF_live3l += 1.0 * GLF_dead8reflectedColor(p, donor_replacementGLF_dead8rd);
        donor_replacementGLF_dead8layers ++;
       }
      donor_replacementGLF_dead8t += max(abs(donor_replacementGLF_dead8d) * 0.8, GLF_live4EPSILON * 1.1);
     }
    }
   if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0)), false || (_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))))
    {
     _GLF_color = _GLF_outVarBackup_GLF_color;
    }
  }
 }
 vec3 n = normal(p);
 vec3 ref = reflect(lig, n);
 if(_GLF_DEAD(false))
  {
   mediump vec4 donor_replacementGLF_dead4gl_FragColor = _GLF_FUZZED(vec4(-403.678, 65.61, 2.7, 9999.1221));
   mediump vec4 donor_replacementGLF_dead4gl_FragCoord = _GLF_FUZZED(trunc(rd.tssp));
   vec2 donor_replacementGLF_dead4mouse = _GLF_FUZZED(GLF_dead1mouse);
   vec2 donor_replacementGLF_dead4resolution = _GLF_FUZZED(vec2(97.67, -41.52));
   {
    vec2 GLF_dead4pos = (donor_replacementGLF_dead4gl_FragCoord.xy / donor_replacementGLF_dead4resolution.xy) + donor_replacementGLF_dead4mouse / 1.1;
    {
     vec3 GLF_live4col = _GLF_FUZZED(vec3(686.316, 4.8, 4.2));
     int GLF_live4i = _GLF_FUZZED(-95218);
     float GLF_live4origdepth = _GLF_FUZZED(-240.102);
     vec3 GLF_live4dir = _GLF_FUZZED(vec3(33.33, -2.3, -4029.6440));
     float GLF_live4EPSILON = _GLF_FUZZED(-2.4);
     int GLF_live4_looplimiter2 = 0;
     vec3 GLF_live4orig = _GLF_FUZZED(vec3(-3667.4001, 8.2, -5686.4804));
     {
      if(GLF_live4_looplimiter2 >= 6)
       {
        ;
       }
      GLF_live4_looplimiter2 ++;
      float GLF_live4depth = 0.0;
      float GLF_live4mat = 0.0;
      {
       int GLF_live4_looplimiter1 = 0;
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < sqrt(0.0)))))
        return vec3(1.0);
       for(
           int GLF_live4i = 0;
           GLF_live4i < 300;
           GLF_live4i ++
       )
        {
         if(_GLF_DEAD(false))
          break;
         if(GLF_live4_looplimiter1 >= 6)
          {
           break;
           if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
            discard;
          }
         GLF_live4_looplimiter1 ++;
         vec3 GLF_live4pos = GLF_live4orig + GLF_live4depth * GLF_live4dir;
         vec2 GLF_live4q = GLF_live4mapWithMat(GLF_live4pos);
         if(GLF_live4q.y < GLF_live4EPSILON)
          {
           GLF_live4mat = GLF_live4q.x;
           break;
          }
         GLF_live4depth += GLF_live4q.y;
         if(GLF_live4i == 199)
          {
           GLF_live4depth = 1000.0;
          }
        }
      }
      if(GLF_live4i == 0)
       GLF_live4origdepth = GLF_live4depth;
      if(GLF_live4depth >= 1000.0)
       {
        vec3(1.0);
       }
      vec3 GLF_live4pos = GLF_live4orig + GLF_live4depth * GLF_live4dir;
      vec3 GLF_live4normal = GLF_live4estimateNormal(GLF_live4pos);
      vec3 GLF_live4dir1 = normalize(vec3(1.0, 1.0, 1.0));
      GLF_live4col += vec3(0.5, 0.1, 0.1) * GLF_live4softshadow(GLF_live4pos, GLF_live4dir1, 20.0 * GLF_live4EPSILON, 100.0, 4.0) * clamp(dot(GLF_live4normal, GLF_live4dir1), 0.0, 1.0);
      vec3 GLF_live4pos2 = vec3(- 9.0, 60.0, 6.0);
      vec3 GLF_live4dir2 = normalize(GLF_live4pos2 - GLF_live4pos);
      GLF_live4col += vec3(0.0, 0.2, 0.5) * GLF_live4softshadow(GLF_live4pos, GLF_live4dir2, 20.0 * GLF_live4EPSILON, 100.0, 4.0) * clamp(dot(GLF_live4normal, GLF_live4dir2), 0.0, 1.0);
      if(GLF_live4mat < 1.0)
       {
        ;
        if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
         return vec3(1.0);
       }
      vec3 GLF_live4reflected = reflect(GLF_live4dir, GLF_live4normal);
      GLF_live4orig = GLF_live4pos + GLF_live4EPSILON * GLF_live4reflected;
      GLF_live4dir = GLF_live4reflected;
     }
    }
    float GLF_dead4x = fract(sin(GLF_dead4pos.x) * 9. + sin(GLF_dead4pos.x * 122. + 10.5) * 3. + sin(GLF_dead4pos.x * 100. + 0.2) * 99.);
    float GLF_dead4y = sin(GLF_dead4pos.y) * 15. + sin(GLF_dead4pos.x * 22. + time) * 0.5 + sin(GLF_dead4pos.x * 8. + 0.2) * 2.;
    float GLF_dead4r = fract(GLF_dead4y + sin(GLF_dead4pos.x + time));
    if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
     return vec3(1.0);
    float GLF_dead4b = fract(GLF_dead4y);
    donor_replacementGLF_dead4gl_FragColor = vec4(GLF_dead4r, smoothstep(GLF_dead4r, 2.03, .3) * .7, smoothstep(GLF_dead4b, 0.05, .34), 1.0);
   }
   {
    vec3 GLF_live4rd = _GLF_FUZZED((-38.12 / vec3(-3586.4350, -91.05, -6.9)));
    float GLF_live4t = _GLF_FUZZED(4.0);
    float GLF_live4res = _GLF_FUZZED(-325.149);
    float GLF_live4EPSILON = _GLF_FUZZED((+ 1.9));
    float GLF_live4k = _GLF_FUZZED((true ? 2.0 : -6.9));
    float GLF_live4maxt = _GLF_FUZZED((+ -16.51));
    int GLF_live4_looplimiter0 = 0;
    vec3 GLF_live4ro = _GLF_FUZZED((vec3(72.77, -4361.3325, -8.0) - vec3(-18.40, -1.8, 8946.5530)));
    for(
        _GLF_struct_38 _GLF_struct_replacement_38 = _GLF_struct_38(mat3(1.0), 0, ivec2(1));
        _GLF_struct_replacement_38.GLF_live4i < 200;
        _GLF_struct_replacement_38.GLF_live4i ++
    )
     {
      if(GLF_live4_looplimiter0 >= 6)
       {
        break;
        if(_GLF_DEAD(false))
         discard;
       }
      GLF_live4_looplimiter0 ++;
      float GLF_live4h = GLF_live4map(GLF_live4ro + GLF_live4rd * GLF_live4t);
      if(GLF_live4h < GLF_live4EPSILON)
       {
        0.0;
       }
      GLF_live4res = min(GLF_live4res, GLF_live4k * GLF_live4h / GLF_live4t);
      GLF_live4t += GLF_live4h;
      if(GLF_live4t >= GLF_live4maxt)
       {
        break;
       }
     }
   }
  }
 float amb = 1.0 * clamp((p.y + 0.25) * 1.2, 0.0, 1.0);
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  return vec3(1.0);
 float dif = clamp(dot(n, lig), 0.0, 1.0);
 if(_GLF_DEAD(false))
  return vec3(1.0);
 float spe = pow(clamp(dot(ref, rd), 0.0, 1.0), 52.0);
 if(_GLF_DEAD(false))
  return vec3(1.0);
 vec3 lin = vec3(0);
 lin += amb;
 lin += dif * vec3(.3, .27, .25);
 lin += 2.0 * spe * vec3(1, .97, .1) * dif;
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   {
    {
     mediump vec4 GLF_live5gl_FragColor = _GLF_FUZZED(vec4(-393.944, -0.6, -2579.3439, -83.53));
     mediump vec4 GLF_live5gl_FragCoord = _GLF_FUZZED((vec3(-3.5, -9010.7886, 5.9) * mat4x3(-5.9, -8806.2422, 679.837, -481.337, 91.26, 355.208, 75.30, -7448.2343, -542.367, -6.1, -2.2, -807.884)));
     {
      vec2 GLF_live5pos = (GLF_live5gl_FragCoord.xy / GLF_live5resolution.xy) + GLF_live5mouse / 1.1;
      float GLF_live5x = fract(sin(GLF_live5pos.x) * 9. + sin(GLF_live5pos.x * 122. + 10.5) * 3. + sin(GLF_live5pos.x * 100. + 0.2) * 99.);
      float GLF_live5y = sin(GLF_live5pos.y) * 15. + sin(GLF_live5pos.x * 22. + GLF_live5time) * 0.5 + sin(GLF_live5pos.x * 8. + 0.2) * 2.;
      _GLF_struct_46 _GLF_struct_replacement_46 = _GLF_struct_46(_GLF_struct_40(_GLF_struct_39(uvec4(1u), mat2x3(1.0), mat3x4(1.0), 1u)), _GLF_struct_43(_GLF_struct_41(ivec4(1), vec2(1.0), bvec2(true), ivec4(1)), _GLF_struct_42(vec4(1.0), uvec4(1u), true)), mat2(1.0), _GLF_struct_45(_GLF_struct_44(bvec3(true), fract(GLF_live5y + sin(GLF_live5pos.x + GLF_live5time)))));
      float GLF_live5b = fract(GLF_live5y);
      GLF_live5gl_FragColor = vec4(_GLF_struct_replacement_46._f3._f0.GLF_live5r, smoothstep(_GLF_struct_replacement_46._f3._f0.GLF_live5r, 2.03, .3) * .7, smoothstep(GLF_live5b, 0.05, .34), 1.0);
     }
    }
    vec2 GLF_live1grid = _GLF_FUZZED(vec2(-530.831));
    {
     if(_GLF_DEAD(false))
      return vec3(1.0);
     if(_GLF_DEAD(false))
      {
       const int donor_replacementGLF_dead0MENGER_ITERATIONS = _GLF_FUZZED((~ int(-0.0)));
       float donor_replacementGLF_dead0dist = _GLF_FUZZED(time);
       {
        vec3 GLF_live3p = _GLF_FUZZED(vec3(-511.769, 7.9, 3.4));
        {
         vec2 GLF_live3h = vec2(0.01, 0.0);
         vec3 GLF_live3n = vec3(GLF_live3map(GLF_live3p + GLF_live3h.xyy).x - GLF_live3map(GLF_live3p - GLF_live3h.xyy).x, GLF_live3map(GLF_live3p + GLF_live3h.yxy).x - GLF_live3map(GLF_live3p - GLF_live3h.yxy).x, GLF_live3map(GLF_live3p + GLF_live3h.yyx).x - GLF_live3map(GLF_live3p - GLF_live3h.yyx).x);
         normalize(GLF_live3n);
        }
       }
       if(_GLF_DEAD(false))
        return vec3(1.0);
       for(
           int GLF_dead0i = 1;
           GLF_dead0i < donor_replacementGLF_dead0MENGER_ITERATIONS;
           GLF_dead0i ++
       )
        {
         donor_replacementGLF_dead0dist = max(donor_replacementGLF_dead0dist, - GLF_dead0sdCrossRepScale(rd, spe));
         spe *= 3.0;
        }
      }
     float GLF_live1m = GLF_live1hash12(GLF_live1grid.yx) * 12.;
     vec3(1. - GLF_live1m * 0.08, GLF_live1m * 0.03, GLF_live1m * 0.06);
    }
   }
   return vec3(1.0);
  }
 return lin;
 if(_GLF_DEAD(false))
  return vec3(1.0);
 {
  _GLF_struct_50 _GLF_struct_replacement_50;
  _GLF_struct_replacement_50._GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = log2(vec4(-9.8, 6003.2576, -6.9, -8441.2543));
  if(_GLF_DEAD(false))
   return vec3(1.0);
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_struct_replacement_50._GLF_outVarBackup_GLF_color;
    if(_GLF_DEAD(false))
     {
      float donor_replacementGLF_dead7EPSILON = _GLF_FUZZED(GLF_live6time);
      float donor_replacementGLF_dead7h = _GLF_FUZZED(time);
      if(donor_replacementGLF_dead7h < donor_replacementGLF_dead7EPSILON)
       {
        0.0;
       }
     }
   }
 }
}
mat3 camera(vec3 e, vec3 la)
{
 _GLF_struct_18 _GLF_struct_replacement_18 = _GLF_struct_18(uvec4(1u), ivec2(1), vec3(0, 1, 0));
 vec3 f = normalize(la - e);
 vec3 r = normalize(cross(_GLF_struct_replacement_18.roll, f));
 vec3 u = normalize(cross(f, r));
 return mat3(r, u, f);
}
void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
 vec2 uv = - 1.0 + 2.0 * (fragCoord / resolution.xy);
 uv.x *= resolution.x / resolution.y;
 vec3 ro = 5.0 * vec3(cos(time * 0.3), 1.0, - sin(time * 0.3));
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   vec4 donor_replacementGLF_dead2fragColor = _GLF_FUZZED(vec4(-9.6, 2.8, 8.9, 1.9));
   if(_GLF_DEAD(false))
    return;
   vec2 donor_replacementGLF_dead2fragCoord = _GLF_FUZZED(uintBitsToFloat(uvec2(14042u, 20172u)));
   vec2 donor_replacementGLF_dead2resolution = _GLF_FUZZED(mix(uv, resolution, 8.5));
   float donor_replacementGLF_dead2time = _GLF_FUZZED((true ? time : time));
   {
    vec2 GLF_dead2uv = - 1.0 + 2.0 * (donor_replacementGLF_dead2fragCoord / donor_replacementGLF_dead2resolution.xy);
    GLF_dead2uv.x *= donor_replacementGLF_dead2resolution.x / donor_replacementGLF_dead2resolution.y;
    vec3 GLF_dead2ro = 5.0 * vec3(cos(donor_replacementGLF_dead2time * 0.3), 1.0, - sin(donor_replacementGLF_dead2time * 0.3));
    vec3 GLF_dead2rd = GLF_dead2camera(GLF_dead2ro, vec3(0)) * normalize(vec3(GLF_dead2uv, 2.0));
    {
     mediump vec4 GLF_live6gl_FragCoord = _GLF_FUZZED((vec4(-2612.7002, -1025.9471, -3716.8297, 3.8) / 8921.5251));
     mediump vec4 GLF_live6gl_FragColor = _GLF_FUZZED(vec4(2884.1862, -188.640, 4.8, -5.9));
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = exp(vec4(-565.125, -83.24, -0.5, 711.966));
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     {
      vec3 GLF_live6color;
      float GLF_live6len;
      float GLF_live6t = GLF_live6time;
      vec2 GLF_live6uv = GLF_live6gl_FragCoord.xy / GLF_live6resolution;
      vec2 GLF_live6offset = GLF_live6uv;
      GLF_live6offset -= .5;
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
       {
        float donor_replacementGLF_dead5dist = _GLF_FUZZED(time);
        const float donor_replacementGLF_dead5height = _GLF_FUZZED(9.2);
        const vec3 donor_replacementGLF_dead5rd = _GLF_FUZZED(((vec3(4.4, -3.4, 0.3) + -5.1) / vec3(7.8, -1900.5748, -238.936)));
        const vec3 donor_replacementGLF_dead5ro = _GLF_FUZZED(vec3(-55.34, -584.371, -1324.3927));
        {
         if(donor_replacementGLF_dead5rd.y == 0.0)
          {
           false;
          }
         float GLF_dead5d = - (donor_replacementGLF_dead5ro.y - donor_replacementGLF_dead5height) / donor_replacementGLF_dead5rd.y;
         GLF_dead5d = min(100000.0, GLF_dead5d);
         if(GLF_dead5d > 0.)
          {
           donor_replacementGLF_dead5dist = GLF_dead5d;
           true;
          }
         false;
        }
       }
      GLF_live6offset.x *= GLF_live6resolution.x / GLF_live6resolution.y;
      GLF_live6len = length(GLF_live6offset);
      GLF_live6t += 0.07;
      vec2 GLF_live6offset_unit_vector = GLF_live6offset / GLF_live6len;
      float GLF_live6firstMod = sin(GLF_live6t) + 1.0;
      float GLF_live6secondMod = abs(sin(GLF_live6len * 9.0 - GLF_live6t * 2.0));
      GLF_live6uv += GLF_live6offset_unit_vector * GLF_live6firstMod * GLF_live6secondMod + GLF_live6mouse * 2.;
      GLF_live6color[0] = .01 / length(abs(fract(GLF_live6uv) - .5));
      GLF_live6offset.x *= GLF_live6resolution.x / GLF_live6resolution.y;
      GLF_live6len = length(GLF_live6offset);
      GLF_live6t += 0.07;
      GLF_live6offset_unit_vector = GLF_live6offset / GLF_live6len;
      GLF_live6firstMod = sin(GLF_live6t) + 1.0;
      GLF_live6secondMod = abs(sin(GLF_live6len * 9.0 - GLF_live6t * 2.0));
      GLF_live6uv += GLF_live6offset_unit_vector * GLF_live6firstMod * GLF_live6secondMod + GLF_live6mouse * 2.;
      GLF_live6color[1] = .01 / length(abs(fract(GLF_live6uv) - .5));
      GLF_live6gl_FragColor = vec4(GLF_live6color / .1, GLF_live6time);
     }
    }
    if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
     return;
    vec3 GLF_dead2l = vec3(- 3.0, 4.0, 0.0);
    vec3 GLF_dead2col = vec3(0);
    vec2 GLF_dead2i = GLF_dead2intersect(GLF_dead2ro, GLF_dead2rd);
    if(GLF_dead2i.y > - 1.0)
     {
      vec3 GLF_dead2p = GLF_dead2ro + GLF_dead2rd * GLF_dead2i.x;
      GLF_dead2col = mix(vec3(.0, .75, .75), vec3(.74, 0, .75), abs(cos(GLF_dead2i.y)));
      {
       vec4 _GLF_outVarBackup_GLF_color;
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        {
         vec4 donor_replacementGLF_dead5center = _GLF_FUZZED(fragColor);
         const vec2 donor_replacementGLF_dead5grid = _GLF_FUZZED(vec2(832.131, 5.7));
         const vec2 donor_replacementGLF_dead5sphereOffset = _GLF_FUZZED((mat4x2(-58.45, -723.080, -8.7, -996.252, -0.6, 19.94, 93.54, -4084.7427) * vec4(-7929.4017, -502.431, 547.068, 4.4)));
         {
          vec2 GLF_dead5offset = donor_replacementGLF_dead5grid + donor_replacementGLF_dead5sphereOffset;
          donor_replacementGLF_dead5center = vec4(GLF_dead5offset.x + 0.5 * 10., 1., GLF_dead5offset.y + 0.5 * 10., 1.);
         }
        }
       _GLF_outVarBackup_GLF_color = _GLF_color;
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
        return;
       _GLF_color = vec4(-2848.4165, -203.216, -8.5, -6.3);
       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
       return;
      GLF_dead2col *= GLF_dead2lighting(GLF_dead2p, GLF_dead2l, GLF_dead2rd);
     }
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
     {
      {
       mediump vec4 GLF_live6gl_FragCoord = _GLF_FUZZED((+ vec4(-1561.2687, 931.997, -1.5, 7.5)));
       mediump vec4 GLF_live6gl_FragColor = _GLF_FUZZED(vec4(-60.59, 1162.9723, 5229.4788, 9333.7549));
       {
        vec3 GLF_live6color;
        float GLF_live6len;
        float GLF_live6t = GLF_live6time;
        vec2 GLF_live6uv = GLF_live6gl_FragCoord.xy / GLF_live6resolution;
        vec2 GLF_live6offset = GLF_live6uv;
        GLF_live6offset -= .5;
        GLF_live6offset.x *= GLF_live6resolution.x / GLF_live6resolution.y;
        GLF_live6len = length(GLF_live6offset);
        GLF_live6t += 0.07;
        vec2 GLF_live6offset_unit_vector = GLF_live6offset / GLF_live6len;
        float GLF_live6firstMod = sin(GLF_live6t) + 1.0;
        float GLF_live6secondMod = abs(sin(GLF_live6len * 9.0 - GLF_live6t * 2.0));
        GLF_live6uv += GLF_live6offset_unit_vector * GLF_live6firstMod * GLF_live6secondMod + GLF_live6mouse * 2.;
        GLF_live6color[0] = .01 / length(abs(fract(GLF_live6uv) - .5));
        GLF_live6offset.x *= GLF_live6resolution.x / GLF_live6resolution.y;
        GLF_live6len = length(GLF_live6offset);
        GLF_live6t += 0.07;
        GLF_live6offset_unit_vector = GLF_live6offset / GLF_live6len;
        GLF_live6firstMod = sin(GLF_live6t) + 1.0;
        if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
         {
          vec2 donor_replacementGLF_dead6b = _GLF_FUZZED(GLF_live5mouse);
          {
           donor_replacementGLF_dead6b.y -= GLF_live6len;
          }
         }
        GLF_live6secondMod = abs(sin(GLF_live6len * 9.0 - GLF_live6t * 2.0));
        GLF_live6uv += GLF_live6offset_unit_vector * GLF_live6firstMod * GLF_live6secondMod + GLF_live6mouse * 2.;
        GLF_live6color[1] = .01 / length(abs(fract(GLF_live6uv) - .5));
        GLF_live6gl_FragColor = vec4(GLF_live6color / .1, GLF_live6time);
       }
      }
      return;
     }
    donor_replacementGLF_dead2fragColor = vec4(GLF_dead2col, 1.0);
   }
  }
 vec3 rd = camera(ro, vec3(0)) * normalize(vec3(uv, 2.0));
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   if(_GLF_DEAD(false))
    {
     vec3 donor_replacementGLF_dead8p = _GLF_FUZZED(mod(min(ro, GLF_live6time), GLF_live5time));
     float donor_replacementGLF_dead8s = _GLF_FUZZED(fragCoord.x);
     {
      length(donor_replacementGLF_dead8p) - donor_replacementGLF_dead8s;
     }
    }
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = vec4(-8351.2667, 0.2, -1021.7795, -3.2);
    if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   if(_GLF_DEAD(false))
    {
     vec3 donor_replacementGLF_dead8p = _GLF_FUZZED(((+ mat4x3(88.67, 22.46, -9.2, 383.900, -5.5, 1.1, -1690.0195, -8878.6162, 7253.4304, -112.511, 1.5, 6.3)) / mat4x3(-279.993, 9.9, -0.2, 6151.5982, -7.1, -1680.7059, 9822.3054, 51.05, 7.9, -20.38, -9857.5511, -3.7))[2]);
     vec3 donor_replacementGLF_dead8rd = _GLF_FUZZED(rd);
     {
      vec3 GLF_dead8Ks = vec3(0.7);
      float GLF_dead8shininess = 40.0;
      vec3 GLF_dead8n = GLF_dead8gradient(donor_replacementGLF_dead8p);
      vec3 GLF_dead8ref = reflect(donor_replacementGLF_dead8rd, GLF_dead8n);
      vec3 GLF_dead8rc = vec3(0);
      vec3 GLF_dead8light_pos = vec3(15.0, 20.0, 2.0);
      vec3 GLF_dead8light_color = vec3(1.0, 1.0, 1.0);
      vec3 GLF_dead8vl = normalize(GLF_dead8light_pos - donor_replacementGLF_dead8p);
      vec3 GLF_dead8specular = vec3(max(0.0, dot(GLF_dead8vl, GLF_dead8ref)));
      vec3 GLF_dead8F = GLF_dead8fresnel(GLF_dead8Ks, normalize(GLF_dead8vl - donor_replacementGLF_dead8rd), GLF_dead8vl);
      GLF_dead8specular = pow(GLF_dead8specular, vec3(GLF_dead8shininess));
      GLF_dead8rc += GLF_dead8light_color * GLF_dead8specular;
      GLF_dead8rc;
     }
    }
   return;
  }
 vec3 l = vec3(- 3.0, 4.0, 0.0);
 vec3 col = vec3(0);
 vec2 i = intersect(ro, rd);
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  if(_GLF_DEAD(false))
   {
    vec2 donor_replacementGLF_dead6b = _GLF_FUZZED(GLF_live5mouse);
    float donor_replacementGLF_dead6c = _GLF_FUZZED(uv[0]);
    mediump vec4 donor_replacementGLF_dead6gl_FragColor = _GLF_FUZZED(vec4(24.79, 3.4, 8577.2486, 445.697));
    mediump vec4 donor_replacementGLF_dead6gl_FragCoord = _GLF_FUZZED((- vec4(3358.7603, -5.7, -2.2, 959.174)));
    float donor_replacementGLF_dead6p = _GLF_FUZZED(time);
    vec2 donor_replacementGLF_dead6resolution = _GLF_FUZZED(smoothstep(i, GLF_live6mouse, i));
    {
     vec2 GLF_dead6uv = donor_replacementGLF_dead6gl_FragCoord.xy / donor_replacementGLF_dead6resolution.xy;
     float GLF_dead6scale = donor_replacementGLF_dead6resolution.x / donor_replacementGLF_dead6resolution.y;
     GLF_dead6uv = GLF_dead6uv - 0.5;
     GLF_dead6uv.y /= GLF_dead6scale;
     donor_replacementGLF_dead6b = GLF_dead6uv * 256.0 + 256.0;
     donor_replacementGLF_dead6c = 0.0;
     for(
         float GLF_dead6i = 16.0;
         GLF_dead6i >= 1.0;
         GLF_dead6i -= 1.0
     )
      {
       donor_replacementGLF_dead6p = pow(2.0, GLF_dead6i);
       if((donor_replacementGLF_dead6p < donor_replacementGLF_dead6b.x) ^^ (donor_replacementGLF_dead6p < donor_replacementGLF_dead6b.y))
        {
         donor_replacementGLF_dead6c += donor_replacementGLF_dead6p;
        }
       if(donor_replacementGLF_dead6p < donor_replacementGLF_dead6b.x)
        {
         donor_replacementGLF_dead6b.x -= donor_replacementGLF_dead6p;
        }
       if(donor_replacementGLF_dead6p < donor_replacementGLF_dead6b.y)
        {
         donor_replacementGLF_dead6b.y -= donor_replacementGLF_dead6p;
        }
      }
     donor_replacementGLF_dead6c = mod(donor_replacementGLF_dead6c / 128.0, 1.0);
     l = vec3(sin(donor_replacementGLF_dead6c + GLF_dead6uv.x * cos(GLF_dead6uv.y * 1.2)), tan(donor_replacementGLF_dead6c + GLF_dead6uv.y - 0.3) * 1.1, cos(donor_replacementGLF_dead6c - GLF_dead6uv.y + 0.9));
     donor_replacementGLF_dead6gl_FragColor = vec4(l, 1.0);
    }
   }
  _GLF_color = vec4(6.4, 7880.1202, 1341.6461, 4.0);
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
  if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
   return;
  {
   {
    vec3(1.0);
   }
  }
 }
 if(i.y > - 1.0)
  {
   vec3 p = ro + rd * i.x;
   col = mix(vec3(.0, .75, .75), vec3(.74, 0, .75), abs(cos(i.y)));
   col *= lighting(p, l, rd);
  }
 fragColor = vec4(col, 1.0);
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(false))
    {
     const vec3 donor_replacementGLF_dead5cameraSpeed = _GLF_FUZZED(vec3(-7.6, -46.68, -955.952));
     vec3 donor_replacementGLF_dead5lig = _GLF_FUZZED(rd);
     vec3 donor_replacementGLF_dead5nor = _GLF_FUZZED(trunc(vec3(-5.0, 6.2, -2336.1196)));
     vec2 donor_replacementGLF_dead5shadowGridPos = _GLF_FUZZED(mat3x2(-5.3, 361.322, 1.0, -79.66, 8.0, -4254.6789)[2]);
     vec3 donor_replacementGLF_dead5shadowStartPos = _GLF_FUZZED(max(vec3(-9.9, 859.419, -900.773), col));
     vec4 donor_replacementGLF_dead5sphereCenter = _GLF_FUZZED(vec4(-627.412, 2511.2023, 9.5, 8.8));
     float donor_replacementGLF_dead5x = _GLF_FUZZED(sqrt(GLF_dead2time));
     for(
         float GLF_dead5y = - 1.;
         GLF_dead5y <= 1.;
         GLF_dead5y ++
     )
      {
       vec2 GLF_dead5gridpos = (donor_replacementGLF_dead5shadowGridPos + vec2(donor_replacementGLF_dead5x, GLF_dead5y)) * 10.;
       GLF_dead5getSphereOffset(GLF_dead5gridpos, i);
       GLF_dead5getMovingSpherePosition(GLF_dead5gridpos, - i, donor_replacementGLF_dead5sphereCenter, ro);
       vec2 GLF_dead5res = GLF_dead5iSphere(donor_replacementGLF_dead5shadowStartPos, donor_replacementGLF_dead5lig, donor_replacementGLF_dead5sphereCenter, ro + donor_replacementGLF_dead5cameraSpeed, donor_replacementGLF_dead5nor);
       if(GLF_dead5res.x > 0.0)
        {
         GLF_live4EPSILON = clamp(GLF_live4EPSILON + mix(GLF_dead5res.y, 0., GLF_dead5res.x / 20.), 0., 1.);
        }
       GLF_dead5getSpherePosition(GLF_dead5gridpos, i, donor_replacementGLF_dead5sphereCenter);
       GLF_dead5res = GLF_dead5iSphere(donor_replacementGLF_dead5shadowStartPos, donor_replacementGLF_dead5lig, donor_replacementGLF_dead5sphereCenter, donor_replacementGLF_dead5cameraSpeed, donor_replacementGLF_dead5nor);
       if(GLF_dead5res.x > 0.0)
        {
         GLF_live4EPSILON = clamp(GLF_live4EPSILON + mix(GLF_dead5res.y, 0., GLF_dead5res.x / 20.), 0., 1.);
        }
      }
    }
   return;
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  return;
}
void main(void)
{
 if(_GLF_DEAD(false))
  {
   {
    float GLF_live2dist = _GLF_FUZZED(-660.365);
    const float GLF_live2RAY_STOP_TRESHOLD = _GLF_FUZZED(5979.5903);
    if(GLF_live2dist < GLF_live2RAY_STOP_TRESHOLD)
     {
      if(_GLF_DEAD(false))
       {
        float donor_replacementGLF_dead6c = _GLF_FUZZED(GLF_live6time);
        float donor_replacementGLF_dead6p = _GLF_FUZZED(dot((matrixCompMult(mat2(-1.6, -539.336, -83.57, 85.28), mat2(51.93, -65.73, 4.6, -6.7)) * mix(vec2(-67.85, 0.6), GLF_live5resolution, bvec2(false, false))), unpackUnorm2x16(84647u)));
        {
         donor_replacementGLF_dead6c += donor_replacementGLF_dead6p;
        }
       }
      ;
     }
   }
   return;
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < abs(0.0)))))
    return;
  }
 mainImage(_GLF_color, gl_FragCoord.xy);
 {
  mediump vec4 GLF_live6gl_FragCoord = _GLF_FUZZED(vec4(-0.8, 46.19, -4.5, -2933.4084));
  mediump vec4 GLF_live6gl_FragColor = _GLF_FUZZED(vec4(vec3(-2650.4863, -6117.8492, 317.177), 1460.3301));
  {
   vec4 _GLF_outVarBackup_GLF_color;
   _GLF_outVarBackup_GLF_color = _GLF_color;
   _GLF_color = mat2x4(-133.180, -5.7, -7.5, 2636.8989, 8272.3600, 4.9, -5356.8235, -9.6)[0];
   if(_GLF_WRAPPED_IF_TRUE(true))
    {
     _GLF_color = _GLF_outVarBackup_GLF_color;
    }
  }
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < sin(0.0)))))
    return;
   vec3 GLF_live6color;
   float GLF_live6len;
   float GLF_live6t = GLF_live6time;
   vec2 GLF_live6uv = GLF_live6gl_FragCoord.xy / GLF_live6resolution;
   vec2 GLF_live6offset = GLF_live6uv;
   GLF_live6offset -= .5;
   GLF_live6offset.x *= GLF_live6resolution.x / GLF_live6resolution.y;
   GLF_live6len = length(GLF_live6offset);
   GLF_live6t += 0.07;
   vec2 GLF_live6offset_unit_vector = GLF_live6offset / GLF_live6len;
   float GLF_live6firstMod = sin(GLF_live6t) + 1.0;
   float GLF_live6secondMod = abs(sin(GLF_live6len * 9.0 - GLF_live6t * 2.0));
   GLF_live6uv += GLF_live6offset_unit_vector * GLF_live6firstMod * GLF_live6secondMod + GLF_live6mouse * 2.;
   GLF_live6color[0] = .01 / length(abs(fract(GLF_live6uv) - .5));
   GLF_live6offset.x *= GLF_live6resolution.x / GLF_live6resolution.y;
   GLF_live6len = length(GLF_live6offset);
   GLF_live6t += 0.07;
   GLF_live6offset_unit_vector = GLF_live6offset / GLF_live6len;
   GLF_live6firstMod = sin(GLF_live6t) + 1.0;
   if(_GLF_DEAD(_GLF_IDENTITY(false, ! (_GLF_IDENTITY(! (false), true && (! (false)))))))
    return;
   GLF_live6secondMod = abs(sin(GLF_live6len * 9.0 - GLF_live6t * 2.0));
   GLF_live6uv += GLF_live6offset_unit_vector * GLF_live6firstMod * GLF_live6secondMod + GLF_live6mouse * 2.;
   GLF_live6color[1] = .01 / length(abs(fract(GLF_live6uv) - .5));
   GLF_live6gl_FragColor = vec4(GLF_live6color / .1, GLF_live6time);
  }
 }
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(false))
    {
     vec3 donor_replacementGLF_dead1pos = _GLF_FUZZED(vec3(578.480, -6993.3703, 7.1));
     {
      vec3 GLF_live3col = _GLF_FUZZED(vec3(102.326, -81.26, 837.397));
      vec3 GLF_live3rd = _GLF_FUZZED((899.304 * vec3(3306.1907, -61.36, 4.4)));
      vec3 GLF_live3l = _GLF_FUZZED(vec3(-3.5, 3.0, -6.9));
      vec3 GLF_live3ro = _GLF_FUZZED((vec3(-31.49, 9329.9704, -373.758) - 2056.1860));
      vec2 GLF_live3i = _GLF_FUZZED(((vec2(-997.013, 8.7) - vec2(-325.141, -2149.8361))));
      if(GLF_live3i.y > - 1.0)
       {
        vec3 GLF_live3p = GLF_live3ro + GLF_live3rd * GLF_live3i.x;
        GLF_live3col = mix(vec3(.0, .75, .75), vec3(.74, 0, .75), abs(cos(GLF_live3i.y)));
        GLF_live3col *= GLF_live3lighting(GLF_live3p, GLF_live3l, GLF_live3rd);
       }
     }
     {
      float GLF_dead1es = 1e-3;
      float GLF_dead1dx = GLF_dead1dist_func(donor_replacementGLF_dead1pos + vec3(GLF_dead1es, 0., 0.)) - GLF_dead1dist_func(donor_replacementGLF_dead1pos - vec3(GLF_dead1es, 0., 0.));
      if(_GLF_DEAD(false))
       return;
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
       {
        vec2 donor_replacementGLF_dead5center = _GLF_FUZZED(mix((mat2(4.4, 223.271, 98.59, 7116.6778) * injectionSwitch), GLF_live5resolution, mat3x2(66.14, 678.856, 73.39, 34.06, 2401.3218, -77.39)[0]));
        const vec2 donor_replacementGLF_dead5grid = _GLF_FUZZED((vec2(366.866, -5.9) + 16.27));
        {
         donor_replacementGLF_dead5center = (GLF_dead5hash22(donor_replacementGLF_dead5grid) - vec2(0.5)) * (7.);
        }
       }
      float GLF_dead1dy = GLF_dead1dist_func(donor_replacementGLF_dead1pos + vec3(0., GLF_dead1es, 0.)) - GLF_dead1dist_func(donor_replacementGLF_dead1pos - vec3(0., GLF_dead1es, 0.));
      if(_GLF_DEAD(false))
       return;
      float GLF_dead1dz = GLF_dead1dist_func(donor_replacementGLF_dead1pos + vec3(0., 0., GLF_dead1es)) - GLF_dead1dist_func(donor_replacementGLF_dead1pos - vec3(0., 0., GLF_dead1es));
      normalize(- vec3(GLF_dead1dx, GLF_dead1dy, GLF_dead1dz));
     }
    }
   return;
  }
}
