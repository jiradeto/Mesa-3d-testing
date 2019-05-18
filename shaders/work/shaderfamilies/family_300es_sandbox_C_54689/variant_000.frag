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

uniform vec2 mouse;

uniform vec2 resolution;

uniform float GLF_dead6time;

struct StripesOpt {
 float distorsion;
 float spacing;
 float bump;
} ;

struct StripesCircleOpt {
 float minRadius;
 float maxRadius;
 float kappa;
 float omega;
 float phi;
} ;

vec2 GLF_dead9opUnion(vec2 GLF_dead9a, vec2 GLF_dead9b)
{
 return GLF_dead9a.y < GLF_dead9b.y ? GLF_dead9a : GLF_dead9b;
}
float GLF_dead9sphere(vec3 GLF_dead9p, float GLF_dead9r)
{
 return length(GLF_dead9p) - GLF_dead9r;
}
float GLF_dead9box(vec3 GLF_dead9p, vec3 GLF_dead9b)
{
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = uintBitsToFloat(uvec4(193228u, 114089u, 95067u, 27519u));
  }
 vec3 GLF_dead9d = abs(GLF_dead9p) - GLF_dead9b;
 return _GLF_IDENTITY(length(max(GLF_dead9d, _GLF_IDENTITY(0.0, clamp(0.0, _GLF_IDENTITY(0.0, min(0.0, 0.0)), 0.0)))), (false ? _GLF_FUZZED(_GLF_IDENTITY(_GLF_IDENTITY(GLF_dead6time, clamp(GLF_dead6time, GLF_dead6time, GLF_dead6time)), (GLF_dead6time) - 0.0)) : length(max(GLF_dead9d, 0.0)))) + min(max(_GLF_IDENTITY(GLF_dead9d.x, length(0.0) + (GLF_dead9d.x)), max(GLF_dead9d.y, GLF_dead9d.z)), 0.0);
}
float GLF_dead9shape(vec3 GLF_dead9p)
{
 if(_GLF_DEAD(_GLF_IDENTITY(false, true && (false))))
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = roundEven(vec4(41.60, -6.8, -42.27, -1.9));
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(9.4, 4.0, 57.30, 33.37);
      }
    }
   _GLF_color = vec4(-4500.8692, 3889.8369, -0.8, -8.1);
  }
 return min(GLF_dead9sphere(_GLF_IDENTITY(GLF_dead9p - _GLF_IDENTITY(vec3(0.0, 1.6, 0.0), min(vec3(0.0, 1.6, 0.0), vec3(0.0, 1.6, 0.0))), (_GLF_IDENTITY(GLF_dead9p - _GLF_IDENTITY(vec3(0.0, 1.6, 0.0), min(vec3(0.0, 1.6, 0.0), vec3(0.0, 1.6, 0.0))), (GLF_dead9p - _GLF_IDENTITY(vec3(0.0, 1.6, 0.0), min(vec3(0.0, 1.6, 0.0), vec3(0.0, 1.6, 0.0)))) - sin(vec3(0.0, 0.0, 0.0)))) * vec3(_GLF_IDENTITY(1.0, clamp(1.0, _GLF_IDENTITY(1.0, max(1.0, _GLF_IDENTITY(1.0, (false ? _GLF_FUZZED(time) : 1.0)))), 1.0)), 1.0, 1.0)), 1.0), _GLF_IDENTITY(GLF_dead9box(GLF_dead9p - vec3(0.0, 0.3, 0.0), vec3(0.6, 0.3, 0.6)), (GLF_dead9box(GLF_dead9p - vec3(0.0, 0.3, 0.0), vec3(0.6, 0.3, 0.6))) * 1.0));
}
float GLF_dead8iTime = 0.0;

vec3 GLF_dead8pal(in float GLF_dead8t, in vec3 GLF_dead8a, in vec3 GLF_dead8b, in vec3 GLF_dead8c, in vec3 GLF_dead8d)
{
 return GLF_dead8a + GLF_dead8b * cos(6.28318 * (GLF_dead8c * GLF_dead8t + GLF_dead8d));
}
vec3 GLF_dead8spectrum(float GLF_dead8n)
{
 return GLF_dead8pal(_GLF_IDENTITY(GLF_dead8n, (GLF_dead8n) + 0.0), vec3(0.5, 0.5, 0.5), vec3(0.0, 0.5, 0.5), vec3(.0, 1.0, .0), vec3(0.62, 0.33, _GLF_IDENTITY(0.37, max(0.37, 0.37))));
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
 if(_GLF_DEAD(false))
  {
   _GLF_color = exp(vec4(3830.6118, -957.207, -0.6, -70.91));
  }
 float GLF_dead8phi = atan(GLF_dead8p.y, GLF_dead8p.x);
 return vec3(GLF_dead8r, GLF_dead8the, GLF_dead8phi);
}
mat3 GLF_dead8rotationXY(vec2 GLF_dead8angle)
{
 vec2 GLF_dead8c = _GLF_IDENTITY(cos(GLF_dead8angle), _GLF_IDENTITY(vec2(0.0, _GLF_IDENTITY(0.0, (0.0) - 0.0)), (vec2(0.0, _GLF_IDENTITY(0.0, (0.0) - 0.0))) - sin(vec2(0.0, 0.0))) + (_GLF_IDENTITY(cos(GLF_dead8angle), clamp(_GLF_IDENTITY(cos(GLF_dead8angle), max(cos(GLF_dead8angle), cos(GLF_dead8angle))), cos(GLF_dead8angle), cos(GLF_dead8angle)))));
 vec2 GLF_dead8s = sin(_GLF_IDENTITY(GLF_dead8angle, (GLF_dead8angle) / vec2(1.0, 1.0)));
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(1444.6431, 4.1, -1567.1621, 2685.3607);
  }
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
 if(_GLF_DEAD(false))
  {
   _GLF_color = (+ vec4(-97.19, -6.2, 5422.0160, -8.7));
  }
 vec3 GLF_dead8p1;
 for(
     float GLF_dead8i = 0.;
     GLF_dead8i < 9.;
     GLF_dead8i ++
 )
  {
   GLF_dead8p1 = GLF_dead8rotationXY(vec2(_GLF_IDENTITY(GLF_dead8i * 2., clamp(GLF_dead8i * 2., GLF_dead8i * 2., GLF_dead8i * 2.)) * 3.14159265359 / 9., _GLF_IDENTITY(0.8, (true ? _GLF_IDENTITY(0.8, (true ? 0.8 : _GLF_FUZZED(GLF_dead8i))) : _GLF_FUZZED(GLF_dead8iTime))))) * GLF_dead8p;
   GLF_dead8d2 = GLF_dead8distortedCapsule(GLF_dead8p1);
   GLF_dead8d0 = GLF_dead8sdUnion_s(GLF_dead8d0, GLF_dead8d2, 0.2);
  }
 return GLF_dead8d0;
}
vec3 GLF_dead8gradient(vec3 GLF_dead8pos)
{
 const vec3 GLF_dead8dx = vec3(0.01, 0.0, 0.0);
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = reflect(vec4(-6.6, -4.2, 2831.6217, 130.899), vec4(-2.0, -332.800, 0.6, 7872.2289));
  }
 const vec3 GLF_dead8dy = _GLF_IDENTITY(vec3(0.0, 0.01, 0.0), min(vec3(0.0, 0.01, 0.0), vec3(0.0, _GLF_IDENTITY(0.01, min(0.01, 0.01)), 0.0)));
 const vec3 GLF_dead8dz = vec3(0.0, 0.0, 0.01);
 return normalize(_GLF_IDENTITY(vec3(GLF_dead8map(GLF_dead8pos + GLF_dead8dx) - GLF_dead8map(GLF_dead8pos - _GLF_IDENTITY(GLF_dead8dx, (GLF_dead8dx) - length(vec3(0.0, 0.0, 0.0)))), GLF_dead8map(GLF_dead8pos + _GLF_IDENTITY(GLF_dead8dy, vec3(1.0, 1.0, 1.0) * (GLF_dead8dy))) - GLF_dead8map(GLF_dead8pos - GLF_dead8dy), GLF_dead8map(GLF_dead8pos + GLF_dead8dz) - GLF_dead8map(GLF_dead8pos - GLF_dead8dz)), (vec3(GLF_dead8map(_GLF_IDENTITY(GLF_dead8pos + GLF_dead8dx, clamp(_GLF_IDENTITY(GLF_dead8pos + GLF_dead8dx, min(GLF_dead8pos + GLF_dead8dx, GLF_dead8pos + GLF_dead8dx)), GLF_dead8pos + GLF_dead8dx, GLF_dead8pos + GLF_dead8dx))) - GLF_dead8map(GLF_dead8pos - GLF_dead8dx), GLF_dead8map(GLF_dead8pos + GLF_dead8dy) - GLF_dead8map(GLF_dead8pos - GLF_dead8dy), GLF_dead8map(GLF_dead8pos + GLF_dead8dz) - GLF_dead8map(GLF_dead8pos - GLF_dead8dz))) / vec3(1.0, 1.0, 1.0)));
}
vec3 GLF_dead8fresnel(vec3 GLF_dead8F0, vec3 GLF_dead8h, vec3 GLF_dead8l)
{
 return GLF_dead8F0 + (_GLF_IDENTITY(1.0 - GLF_dead8F0, min(1.0 - GLF_dead8F0, _GLF_IDENTITY(1.0 - GLF_dead8F0, clamp(1.0 - GLF_dead8F0, 1.0 - GLF_dead8F0, 1.0 - GLF_dead8F0))))) * pow(clamp(1.0 - dot(GLF_dead8h, GLF_dead8l), 0.0, 1.0), 5.0);
}
vec3 GLF_dead8selfColor(vec3 GLF_dead8pos)
{
 vec3 GLF_dead8pol = GLF_dead8carToPol(GLF_dead8pos - vec3(0.4, 0, _GLF_IDENTITY(0, clamp(0, 0, 0))));
 if(_GLF_DEAD(false))
  {
   _GLF_color = exp(vec4(-8.7, 3631.8843, 698.613, 790.399));
  }
 return GLF_dead8spectrum(0.45 * GLF_dead8pol.x);
}
mat3 GLF_dead8calcLookAtMatrix(in vec3 GLF_dead8ro, in vec3 GLF_dead8ta, in float GLF_dead8roll)
{
 vec3 GLF_dead8ww = normalize(GLF_dead8ta - GLF_dead8ro);
 vec3 GLF_dead8uu = normalize(cross(GLF_dead8ww, vec3(sin(GLF_dead8roll), cos(GLF_dead8roll), 0.0)));
 vec3 GLF_dead8vv = normalize(cross(GLF_dead8uu, GLF_dead8ww));
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(vec2(-0.9, -74.86), vec2(-4.7, 9.2));
  }
 return mat3(GLF_dead8uu, GLF_dead8vv, GLF_dead8ww);
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
vec2 GLF_dead6rand2(vec2 GLF_dead6seed)
{
 return vec2(fract(sin(dot(GLF_dead6seed.xy, vec2(12.9898, 78.233))) * 43758.5453), fract(_GLF_IDENTITY(cos(dot(GLF_dead6seed.xy, _GLF_IDENTITY(vec2(4.898, 7.23), sqrt(vec2(0.0, 0.0)) + (vec2(4.898, 7.23))))) * 23421.631, max(cos(dot(GLF_dead6seed.xy, vec2(4.898, 7.23))) * 23421.631, _GLF_IDENTITY(cos(dot(GLF_dead6seed.xy, vec2(4.898, 7.23))) * 23421.631, min(cos(dot(GLF_dead6seed.xy, vec2(4.898, 7.23))) * 23421.631, cos(dot(GLF_dead6seed.xy, vec2(4.898, 7.23))) * 23421.631))))));
}
vec2 GLF_dead6noise2(vec2 GLF_dead6uv)
{
 vec2 GLF_dead6e = vec2(1., 0.);
 vec2 GLF_dead6i = floor(GLF_dead6uv);
 vec2 GLF_dead6t = fract(GLF_dead6uv);
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = (9231.5849 - vec4(-7.4, -671.558, -7.1, -1497.9514));
  }
 GLF_dead6t = _GLF_IDENTITY(GLF_dead6t, sqrt(vec2(0.0, 0.0)) + (_GLF_IDENTITY(GLF_dead6t, (GLF_dead6t) * _GLF_IDENTITY(vec2(1.0, 1.0), min(vec2(1.0, 1.0), vec2(1.0, 1.0)))))) * GLF_dead6t * (3. - 2. * GLF_dead6t);
 vec2 GLF_dead6r00 = GLF_dead6rand2((GLF_dead6i + _GLF_IDENTITY(GLF_dead6e.yy, _GLF_IDENTITY(clamp(GLF_dead6e.yy, GLF_dead6e.yy, GLF_dead6e.yy), clamp(_GLF_IDENTITY(clamp(GLF_dead6e.yy, GLF_dead6e.yy, GLF_dead6e.yy), max(_GLF_IDENTITY(_GLF_IDENTITY(clamp(GLF_dead6e.yy, GLF_dead6e.yy, GLF_dead6e.yy), max(clamp(GLF_dead6e.yy, GLF_dead6e.yy, GLF_dead6e.yy), clamp(GLF_dead6e.yy, GLF_dead6e.yy, GLF_dead6e.yy))), clamp(clamp(GLF_dead6e.yy, GLF_dead6e.yy, GLF_dead6e.yy), clamp(GLF_dead6e.yy, GLF_dead6e.yy, GLF_dead6e.yy), clamp(GLF_dead6e.yy, GLF_dead6e.yy, GLF_dead6e.yy))), clamp(GLF_dead6e.yy, GLF_dead6e.yy, GLF_dead6e.yy))), clamp(_GLF_IDENTITY(GLF_dead6e.yy, min(GLF_dead6e.yy, GLF_dead6e.yy)), GLF_dead6e.yy, GLF_dead6e.yy), _GLF_IDENTITY(clamp(GLF_dead6e.yy, _GLF_IDENTITY(GLF_dead6e, min(_GLF_IDENTITY(GLF_dead6e, (GLF_dead6e) * vec2(1.0, 1.0)), GLF_dead6e)).yy, GLF_dead6e.yy), max(_GLF_IDENTITY(clamp(GLF_dead6e.yy, GLF_dead6e.yy, GLF_dead6e.yy), max(clamp(GLF_dead6e.yy, _GLF_IDENTITY(GLF_dead6e, clamp(GLF_dead6e, GLF_dead6e, _GLF_IDENTITY(GLF_dead6e, min(GLF_dead6e, GLF_dead6e)))).yy, GLF_dead6e.yy), clamp(GLF_dead6e.yy, GLF_dead6e.yy, GLF_dead6e.yy))), clamp(GLF_dead6e.yy, GLF_dead6e.yy, GLF_dead6e.yy))))))) * .0254);
 vec2 GLF_dead6r10 = GLF_dead6rand2((GLF_dead6i + GLF_dead6e.xy) * .0254);
 vec2 GLF_dead6r01 = GLF_dead6rand2((GLF_dead6i + GLF_dead6e.yx) * .0254);
 if(_GLF_DEAD(false))
  {
   _GLF_color = min(vec4(1.2, -31.77, 836.191, -652.601), vec4(-8.5, -6.4, -5.6, -3.0));
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = vec4(5.0, -3.3, -2814.9469, -767.079);
  }
 vec2 GLF_dead6r11 = GLF_dead6rand2((GLF_dead6i + GLF_dead6e.xx) * .0254);
 return mix(mix(GLF_dead6r00, GLF_dead6r10, GLF_dead6t.x), mix(GLF_dead6r01, GLF_dead6r11, GLF_dead6t.x), GLF_dead6t.y);
}
float GLF_dead6noise(vec2 GLF_dead6uv)
{
 return GLF_dead6noise2(GLF_dead6uv).x;
}
vec2 GLF_dead6moda(vec2 GLF_dead6uv, float GLF_dead6repeat, out float GLF_dead6iter)
{
 float GLF_dead6a = atan(GLF_dead6uv.y, GLF_dead6uv.x);
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   vec4 donor_replacementGLF_dead8fragColor = _GLF_FUZZED(vec4(483.184, -7830.4525, -7.3, 0.7));
   vec2 donor_replacementGLF_dead8fragCoord = _GLF_FUZZED(resolution);
   const vec4 donor_replacementGLF_dead8iMouse = _GLF_FUZZED(vec4(vec2(27.13, -122.817), vec2(136.036, 126.237)));
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(7.4, -269.313, 69.71, -8.9);
    }
   float donor_replacementGLF_dead8iTime = _GLF_FUZZED(time);
   vec2 donor_replacementGLF_dead8resolution = _GLF_FUZZED(GLF_dead6uv);
   {
    vec2 GLF_dead8p = (- donor_replacementGLF_dead8resolution.xy + 2.0 * donor_replacementGLF_dead8fragCoord.xy) / donor_replacementGLF_dead8resolution.y;
    vec3 GLF_dead8ro = vec3(- 5.0 * cos(0.2 * donor_replacementGLF_dead8iTime + 10.0), 1.0, 5.0 * sin(0.2 * donor_replacementGLF_dead8iTime + 10.0));
    vec3 GLF_dead8ta = vec3(0., 0., 0.);
    float GLF_dead8aa = 1.0 / min(donor_replacementGLF_dead8resolution.y, donor_replacementGLF_dead8resolution.x);
    mat3 GLF_dead8camMat = GLF_dead8calcLookAtMatrix(GLF_dead8ro, GLF_dead8ta, 0.0);
    vec3 GLF_dead8rd = normalize(GLF_dead8camMat * vec3(GLF_dead8p.xy, 1.9 + 0.8 * sin(0.15 * _GLF_IDENTITY(donor_replacementGLF_dead8iTime, (false ? _GLF_FUZZED(_GLF_IDENTITY(donor_replacementGLF_dead8iTime, clamp(donor_replacementGLF_dead8iTime, donor_replacementGLF_dead8iTime, _GLF_IDENTITY(donor_replacementGLF_dead8iTime, (donor_replacementGLF_dead8iTime) - 0.0)))) : donor_replacementGLF_dead8iTime)))));
    mat3 GLF_dead8rot = GLF_dead8rotationXY(_GLF_IDENTITY(donor_replacementGLF_dead8iMouse.xy, (_GLF_IDENTITY(donor_replacementGLF_dead8iMouse.xy, max(donor_replacementGLF_dead8iMouse.xy, donor_replacementGLF_dead8iMouse.xy))) - vec2(0.0, 0.0)) * vec2(0.01, - 0.01));
    GLF_dead8rd = GLF_dead8rot * GLF_dead8rd;
    GLF_dead8ro = GLF_dead8rot * GLF_dead8ro;
    vec3 GLF_dead8col = vec3(0), GLF_dead8sp;
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(7078.5518, 8.7, -48.39, 6.9);
      if(_GLF_DEAD(false))
       {
        _GLF_color = vec4(1941.1811, 3743.9292, 8.5, -135.192);
       }
     }
    float GLF_dead8t = 0., GLF_dead8layers = 0., GLF_dead8d, GLF_dead8aD;
    float GLF_dead8thD = 0.3 * sqrt(GLF_dead8aa);
    for(
        int GLF_dead8i = 0;
        GLF_dead8i < 50;
        GLF_dead8i ++
    )
     {
      if(GLF_dead8layers > 12. || GLF_dead8col.g > 1.0 || GLF_dead8t > 8.)
       break;
      if(_GLF_DEAD(false))
       {
        _GLF_color = _GLF_IDENTITY(vec4(-876.499, 172.573, 770.280, _GLF_IDENTITY(-1.8, (-1.8) / 1.0)), length(normalize(vec4(1.0, 1.0, 1.0, 1.0))) * (vec4(-876.499, 172.573, 770.280, _GLF_IDENTITY(-1.8, (-1.8) / 1.0))));
       }
      GLF_dead8sp = GLF_dead8ro + GLF_dead8rd * GLF_dead8t;
      _GLF_IDENTITY(GLF_dead8d = GLF_dead8map(GLF_dead8sp), (GLF_dead8d = GLF_dead8map(GLF_dead8sp)) / abs(1.0));
      GLF_dead8aD = (GLF_dead8thD - abs(GLF_dead8d)) / _GLF_IDENTITY(GLF_dead8thD, (GLF_dead8thD) - 0.0);
      if(GLF_dead8aD > 0.)
       {
        vec3 GLF_dead8sc = GLF_dead8selfColor(GLF_dead8sp);
        GLF_dead8col += _GLF_IDENTITY(8., max(_GLF_IDENTITY(8., (_GLF_IDENTITY(8., clamp(8., 8., 8.))) - 0.0), 8.)) * GLF_dead8sc * (GLF_dead8aD * GLF_dead8aD * (3. - 2. * GLF_dead8aD) / (1. + GLF_dead8t * GLF_dead8t * 0.85));
        GLF_dead8col += 1.0 * GLF_dead8reflectedColor(GLF_dead8sp, GLF_dead8rd);
        GLF_dead8layers ++;
       }
      if(_GLF_DEAD(false))
       {
        _GLF_color = floor(vec4(-9.7, -7465.6209, 8.4, -7816.0869));
       }
      GLF_dead8t += max(abs(GLF_dead8d) * 0.8, GLF_dead8thD * _GLF_IDENTITY(1.1, min(1.1, 1.1)));
     }
    GLF_dead8col = max(GLF_dead8col, 0.);
    donor_replacementGLF_dead8fragColor = vec4(clamp(GLF_dead8col, 0., 1.), 1);
   }
  }
 float GLF_dead6s = 3.14159265 / GLF_dead6repeat;
 GLF_dead6iter = mod(GLF_dead6a / 2. / GLF_dead6s, GLF_dead6repeat);
 GLF_dead6a = mod(GLF_dead6a, 2. * GLF_dead6s) - GLF_dead6s;
 return length(GLF_dead6uv) * vec2(cos(GLF_dead6a), sin(GLF_dead6a));
}
float GLF_dead6smin(float GLF_dead6a, float GLF_dead6b, float GLF_dead6k)
{
 float GLF_dead6h = max(GLF_dead6k - abs(GLF_dead6a - GLF_dead6b), 0.0) / GLF_dead6k;
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < tan(0.0)))))
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-9.2, -48.39, -43.02, 1711.2557);
    }
   float donor_replacementGLF_dead9EPSILON = _GLF_FUZZED(mix(vec3(-924.823, -829.699, 8.2), vec3(-9.6, 1969.8567, 6.2), vec3(9.7, -7.4, -6344.0173)).t);
   float donor_replacementGLF_dead9h = _GLF_FUZZED(GLF_dead6k);
   if(_GLF_DEAD(false))
    {
     _GLF_color = (mat2x4(8.7, 8057.0799, 6315.5433, -8.0, -4315.7551, 2412.9142, -1.5, 874.757)[1] / -8.0);
    }
   if(donor_replacementGLF_dead9h < _GLF_IDENTITY(donor_replacementGLF_dead9EPSILON, (donor_replacementGLF_dead9EPSILON) - 0.0))
    {
     return 0.0;
    }
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(_GLF_IDENTITY(9.7, min(9.7, _GLF_IDENTITY(9.7, min(9.7, 9.7)))), _GLF_IDENTITY(0.5, (false ? _GLF_FUZZED(time) : 0.5)), 3587.4211, -4890.7066);
  }
 return min(GLF_dead6a, GLF_dead6b) - GLF_dead6h * GLF_dead6h * GLF_dead6k * (1.0 / 4.0);
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = fract(vec4(19.16, -6.1, 884.553, _GLF_IDENTITY(3248.1264, (3248.1264) / length(normalize(1.0)))));
  }
}
float GLF_dead6circleRing(vec2 GLF_dead6uv, float GLF_dead6steps, float GLF_dead6minr, float GLF_dead6maxr, float GLF_dead6angleJitter, float GLF_dead6angularSpeed, float GLF_dead6rotation)
{
 if(_GLF_DEAD(false))
  {
   _GLF_IDENTITY(_GLF_color = vec4(1469.1277, -4719.1095, -1621.6959, -27.35), (_GLF_IDENTITY(_GLF_color = vec4(1469.1277, -4719.1095, -1621.6959, -27.35), (_GLF_color = vec4(1469.1277, -4719.1095, -1621.6959, _GLF_IDENTITY(-27.35, max(_GLF_IDENTITY(-27.35, (false ? _GLF_FUZZED(GLF_dead6time) : -27.35)), -27.35)))) / vec4(1.0, 1.0, 1.0, 1.0))) + tan(vec4(0.0, 0.0, 0.0, 0.0)));
  }
 float GLF_dead6iter;
 float GLF_dead6a = atan(GLF_dead6uv.y, GLF_dead6uv.x);
 GLF_dead6a += GLF_dead6rotation + GLF_dead6time * GLF_dead6angularSpeed;
 GLF_dead6uv = length(GLF_dead6uv) * vec2(cos(GLF_dead6a), sin(GLF_dead6a));
 GLF_dead6uv = _GLF_IDENTITY(GLF_dead6moda(GLF_dead6uv, GLF_dead6steps, GLF_dead6iter), _GLF_IDENTITY(vec2(1.0, 1.0) * (GLF_dead6moda(GLF_dead6uv, GLF_dead6steps, GLF_dead6iter)), (vec2(1.0, 1.0) * (GLF_dead6moda(GLF_dead6uv, GLF_dead6steps, GLF_dead6iter))) * vec2(1.0, 1.0)));
 vec2 GLF_dead6r = GLF_dead6rand2(vec2(floor(GLF_dead6iter) * .0354, 0.21));
 float GLF_dead6d = length(GLF_dead6uv - vec2(.3 + mix(_GLF_IDENTITY(GLF_dead6maxr, (GLF_dead6maxr) * 1.0), GLF_dead6minr, GLF_dead6r.x), mix(- _GLF_IDENTITY(1., (_GLF_TRUE(true, (gl_FragCoord.y >= 0.0)) ? 1. : _GLF_FUZZED((+ GLF_dead6time)))), 1., GLF_dead6r.y) * .08 * GLF_dead6angleJitter)) - mix(GLF_dead6minr, GLF_dead6maxr, GLF_dead6r.x);
 return - GLF_dead6d;
}
float GLF_dead6shape1(vec2 GLF_dead6uv, float GLF_dead6steps, float GLF_dead6angleJitter, float GLF_dead6angularSpeed)
{
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(7.6, -7512.4182, 2.7, -2.4);
  }
 float GLF_dead6d = length(GLF_dead6uv) - .4;
 GLF_dead6d = min(GLF_dead6d, - GLF_dead6circleRing(GLF_dead6uv, GLF_dead6steps, .05, .08, GLF_dead6angleJitter, GLF_dead6angularSpeed, .0));
 return - GLF_dead6d;
}
float GLF_dead6stripes(vec2 GLF_dead6uv, StripesOpt GLF_dead6opt)
{
 vec2 GLF_dead6ouv = GLF_dead6uv;
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   _GLF_color = uintBitsToFloat(uvec4(uvec2(18481u, 42691u), uvec2(84797u, 83387u)));
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = pow(vec4(3.7, -3.4, -8032.5190, 31.45), vec4(2627.5629, -5.1, 4.5, -7.2));
  }
 float GLF_dead6s = 10.;
 float GLF_dead6iter = floor(GLF_dead6uv.x * GLF_dead6s + .25);
 GLF_dead6uv.x = mod(_GLF_IDENTITY(GLF_dead6uv.x, max(GLF_dead6uv.x, GLF_dead6uv.x)), 1. / 10.) - 1. / 10. / 2.;
 vec2 GLF_dead6r = GLF_dead6rand2(vec2(GLF_dead6iter * .0234, GLF_dead6iter * 0.8913));
 float GLF_dead6ax = mix(- 1., 1., GLF_dead6r.x) * .05 * GLF_dead6opt.distorsion;
 float GLF_dead6d = sin(2. * 3.14159265 * (GLF_dead6uv.x + GLF_dead6uv.y * GLF_dead6ax) * 10.);
 GLF_dead6d += mix(- .5 + GLF_dead6opt.spacing, .5 + GLF_dead6opt.spacing, GLF_dead6r.x);
 GLF_dead6d *= .03;
 if(_GLF_DEAD(false))
  {
   vec3 donor_replacementGLF_dead9eye = _GLF_FUZZED(reflect(vec3(-886.857, -45.17, 3440.5345), exp2(vec3(-4990.9060, 41.64, 7.9))));
   float donor_replacementGLF_dead9roll = _GLF_FUZZED(-116.975);
   vec3 donor_replacementGLF_dead9target = _GLF_FUZZED(_GLF_IDENTITY(vec3(1.6, 9.6, -7905.0059), (vec3(1.6, 9.6, -7905.0059)) / vec3(1.0, 1.0, 1.0)));
   {
    vec3 GLF_dead9cw = normalize(donor_replacementGLF_dead9target - _GLF_IDENTITY(donor_replacementGLF_dead9eye, max(donor_replacementGLF_dead9eye, _GLF_IDENTITY(donor_replacementGLF_dead9eye, min(donor_replacementGLF_dead9eye, _GLF_IDENTITY(donor_replacementGLF_dead9eye, (donor_replacementGLF_dead9eye) / vec3(1.0, 1.0, 1.0)))))));
    vec3 GLF_dead9cp = vec3(sin(donor_replacementGLF_dead9roll), cos(donor_replacementGLF_dead9roll), 0.0);
    if(_GLF_DEAD(false))
     {
      _GLF_color = _GLF_IDENTITY((mat3x4(-22.30, 70.34, 9.0, -5.6, -96.39, 3.2, -5552.0270, _GLF_IDENTITY(178.269, max(178.269, 178.269)), -90.39, -4.2, -8329.1356, -6.8) * vec3(1034.8349, _GLF_IDENTITY(5712.1959, (false ? _GLF_FUZZED(GLF_dead6iter) : 5712.1959)), -8.7)), ((mat3x4(-22.30, 70.34, 9.0, -5.6, -96.39, 3.2, -5552.0270, 178.269, -90.39, -4.2, -8329.1356, -6.8) * vec3(1034.8349, _GLF_IDENTITY(5712.1959, (false ? _GLF_FUZZED(GLF_dead6iter) : 5712.1959)), -8.7))) * vec4(1.0, 1.0, _GLF_IDENTITY(1.0, (_GLF_IDENTITY(1.0, (1.0) / 1.0)) + 0.0), 1.0));
     }
    vec3 GLF_dead9cu = _GLF_IDENTITY(normalize(cross(GLF_dead9cw, GLF_dead9cp)), max(normalize(cross(GLF_dead9cw, GLF_dead9cp)), normalize(_GLF_IDENTITY(cross(GLF_dead9cw, GLF_dead9cp), min(cross(GLF_dead9cw, GLF_dead9cp), cross(GLF_dead9cw, GLF_dead9cp))))));
    vec3 GLF_dead9cv = normalize(cross(GLF_dead9cu, GLF_dead9cw));
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
     {
      _GLF_color = vec4(-7.9, -0.1, 9991.0345, 83.27);
     }
    mat3(GLF_dead9cu, GLF_dead9cv, GLF_dead9cw);
   }
  }
 float GLF_dead6sides = .47 - abs(GLF_dead6uv.y);
 float GLF_dead6nobump = (1. - step(.5, GLF_dead6opt.bump)) * 99999.;
 GLF_dead6uv = GLF_dead6ouv;
 GLF_dead6s = 2.;
 GLF_dead6uv.x = mod(GLF_dead6uv.x, GLF_dead6s) - GLF_dead6s / 2.;
 GLF_dead6sides = min(GLF_dead6sides, length(GLF_dead6uv - vec2(0., .9)) - _GLF_IDENTITY(0.6, (0.6) / 1.0) + GLF_dead6nobump);
 GLF_dead6sides = min(GLF_dead6sides, length(GLF_dead6uv - vec2(0.5, - .85)) - 0.55 + GLF_dead6nobump);
 GLF_dead6d = GLF_dead6smin(GLF_dead6d, GLF_dead6sides, mix(_GLF_IDENTITY(0.10, (0.10) - 0.0), 0.05, GLF_dead6r.y));
 return GLF_dead6d;
}
float GLF_dead6fill(float GLF_dead6d)
{
 return _GLF_IDENTITY(smoothstep(0., .003, GLF_dead6d), max(smoothstep(0., .003, GLF_dead6d), _GLF_IDENTITY(smoothstep(0., .003, GLF_dead6d), max(smoothstep(0., .003, GLF_dead6d), smoothstep(0., .003, GLF_dead6d)))));
}
float GLF_dead6fit01(float GLF_dead6a, float GLF_dead6b, float GLF_dead6x)
{
 return (clamp(_GLF_IDENTITY(GLF_dead6x, (_GLF_FALSE(false, (gl_FragCoord.x < 0.0)) ? _GLF_FUZZED(sin(dot(vec3(-8.5, 28.19, -2.3), vec3(6609.6873, 9.2, -8.4)))) : GLF_dead6x)), GLF_dead6a, GLF_dead6b) - GLF_dead6a) / (GLF_dead6b - GLF_dead6a);
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = vec4(-7.6, 6713.4580, 7.0, 9636.6718);
  }
}
float GLF_dead6stripesCircle(vec2 GLF_dead6uv, StripesCircleOpt GLF_dead6opt, StripesOpt GLF_dead6sopt)
{
 GLF_dead6uv = vec2(atan(GLF_dead6uv.y, GLF_dead6uv.x) / 3.14159265 * GLF_dead6opt.kappa + GLF_dead6time * GLF_dead6opt.omega + GLF_dead6opt.phi, GLF_dead6fit01(GLF_dead6opt.minRadius, GLF_dead6opt.maxRadius, length(GLF_dead6uv)) * 2. - 1.);
 return GLF_dead6stripes(GLF_dead6uv, GLF_dead6sopt);
}
float GLF_dead6stripesCircle1(vec2 GLF_dead6uv, float GLF_dead6distorsion)
{
 return GLF_dead6stripesCircle(GLF_dead6uv, StripesCircleOpt(.25, .385, 3., - .05, 0.), StripesOpt(GLF_dead6distorsion, 0., 1.));
}
float GLF_dead6stripesCircle2(vec2 GLF_dead6uv, float GLF_dead6distorsion)
{
 if(_GLF_DEAD(_GLF_IDENTITY(false, ! (! (_GLF_IDENTITY(false, false || (false)))))))
  {
   float donor_replacementGLF_dead8a = _GLF_FUZZED(GLF_dead6time);
   float donor_replacementGLF_dead8b = _GLF_FUZZED(mix(_GLF_IDENTITY(GLF_dead6distorsion, _GLF_IDENTITY(0.0, max(_GLF_IDENTITY(0.0, clamp(0.0, _GLF_IDENTITY(0.0, (0.0) / 1.0), 0.0)), 0.0)) + (GLF_dead6distorsion)), time, time));
   float donor_replacementGLF_dead8k = _GLF_FUZZED(dot(vec4(7158.6703, 9.8, -4.4, 8.6), _GLF_color));
   {
    float GLF_dead8h = clamp(0.5 + 0.5 * (donor_replacementGLF_dead8b - donor_replacementGLF_dead8a) / donor_replacementGLF_dead8k, 0.0, 1.0);
    if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
     {
      _GLF_color = vec4(-37.33, 55.90, 2.0, 1562.0409);
     }
    return mix(donor_replacementGLF_dead8b, donor_replacementGLF_dead8a, GLF_dead8h) - donor_replacementGLF_dead8k * GLF_dead8h * (1.0 - GLF_dead8h);
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
     {
      _GLF_color = reflect((vec2(80.15, -4557.6381) * mat4x2(-6.2, 60.10, -6.9, 8803.6489, -5069.8940, 3634.5596, -5.5, -6891.3507)), vec4(-13.80, -7.1, -417.051, -78.79));
     }
   }
  }
 return GLF_dead6stripesCircle(GLF_dead6uv, StripesCircleOpt(.354, .395, 3.5, - .01, 112.2), StripesOpt(GLF_dead6distorsion, .5, 1.));
}
float GLF_dead6stripesCircle3(vec2 GLF_dead6uv, float GLF_dead6distorsion)
{
 return GLF_dead6stripesCircle(GLF_dead6uv, StripesCircleOpt(.45, .9, 7.5, - .03, 57.3), StripesOpt(GLF_dead6distorsion, 0., 1.));
}
float GLF_dead6stripesCircle4(vec2 GLF_dead6uv, float GLF_dead6distorsion)
{
 return GLF_dead6stripesCircle(GLF_dead6uv, StripesCircleOpt(.4, .95, 6.5, - .03, 32.7), StripesOpt(GLF_dead6distorsion, 0., 1.));
}
void GLF_dead6solveCircle(in float GLF_dead6width, in float GLF_dead6aperture, out float GLF_dead6radius, out float GLF_dead6offset)
{
 GLF_dead6offset = (GLF_dead6width * GLF_dead6width / GLF_dead6aperture - _GLF_IDENTITY(GLF_dead6aperture, (false ? _GLF_FUZZED(GLF_dead6radius) : GLF_dead6aperture))) / 2.;
 GLF_dead6radius = GLF_dead6offset + GLF_dead6aperture;
}
float GLF_dead2sdCross(vec3 GLF_dead2p)
{
 GLF_dead2p = _GLF_IDENTITY(abs(GLF_dead2p), (abs(GLF_dead2p)) + vec3(0.0, 0.0, 0.0));
 vec3 GLF_dead2d = vec3(_GLF_IDENTITY(max(GLF_dead2p.x, GLF_dead2p.y + 0.07), clamp(max(GLF_dead2p.x, _GLF_IDENTITY(GLF_dead2p.y, (GLF_dead2p.y) - 0.0) + 0.07), max(GLF_dead2p.x, _GLF_IDENTITY(_GLF_IDENTITY(GLF_dead2p.y, clamp(GLF_dead2p.y, GLF_dead2p.y, _GLF_IDENTITY(GLF_dead2p.y, min(GLF_dead2p.y, GLF_dead2p.y)))), min(_GLF_IDENTITY(GLF_dead2p.y, (GLF_dead2p.y) * cos(0.0)), _GLF_IDENTITY(GLF_dead2p, clamp(GLF_dead2p, GLF_dead2p, GLF_dead2p)).y)) + 0.07), max(GLF_dead2p.x, GLF_dead2p.y + 0.07))), max(GLF_dead2p.y, GLF_dead2p.z), max(GLF_dead2p.z, GLF_dead2p.x));
 return min(GLF_dead2d.x, min(GLF_dead2d.y, GLF_dead2d.z)) - (1.0 / 2.23);
}
float GLF_dead2sdCrossRep(vec3 GLF_dead2p)
{
 vec3 GLF_dead2q = _GLF_IDENTITY(mod(GLF_dead2p + 1.0, 2.0) - 1.0, clamp(mod(GLF_dead2p + 1.0, 2.0) - _GLF_IDENTITY(1.0, _GLF_IDENTITY(max(1.0, 1.0), min(_GLF_IDENTITY(max(1.0, 1.0), (true ? max(1.0, 1.0) : _GLF_FUZZED(GLF_dead8iTime))), max(1.0, 1.0)))), mod(GLF_dead2p + 1.0, 2.0) - 1.0, _GLF_IDENTITY(mod(GLF_dead2p + 1.0, 2.0) - 1.0, _GLF_IDENTITY(vec3(_GLF_IDENTITY(0.0, (_GLF_IDENTITY(0.0, (true ? 0.0 : _GLF_FUZZED(GLF_dead8iTime)))) * 1.0), 0.0, 0.0) + (mod(GLF_dead2p + 1.0, 2.0) - 1.0), (vec3(_GLF_IDENTITY(0.0, (_GLF_IDENTITY(0.0, (true ? 0.0 : _GLF_FUZZED(GLF_dead8iTime)))) * 1.0), 0.0, 0.0) + (mod(GLF_dead2p + 1.0, 2.0) - 1.0)) + tan(vec3(0.0, 0.0, 0.0))))));
 return GLF_dead2sdCross(GLF_dead2q);
}
float GLF_dead2sdCrossRepScale(vec3 GLF_dead2p, float GLF_dead2s)
{
 return GLF_dead2sdCrossRep(_GLF_IDENTITY(GLF_dead2p, cos(vec3(0.0, 0.0, 0.0)) * (GLF_dead2p)) * GLF_dead2s) / GLF_dead2s;
}
float GLF_dead4checker(vec2 GLF_dead4uv)
{
 GLF_dead4uv = mod(GLF_dead4uv, 1.) - .5;
 return step(GLF_dead4uv.x * GLF_dead4uv.y, 0.);
}
float GLF_dead1hash12(vec2 GLF_dead1p)
{
 vec3 GLF_dead1p3 = fract(vec3(GLF_dead1p.xyx) * .1031);
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = vec4(-6129.2072, -148.316, 6636.5208, 98.68);
  }
 GLF_dead1p3 += dot(GLF_dead1p3, GLF_dead1p3.yzx + 19.19);
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(1.5, 30.94, _GLF_IDENTITY(4.0, 1.0 * (4.0)), -339.125);
    }
   mediump vec4 donor_replacementGLF_dead5gl_FragColor = _GLF_FUZZED(vec4(-3.1, 2.7, -183.576, 5991.3712));
   mediump vec4 donor_replacementGLF_dead5gl_FragCoord = _GLF_FUZZED(step(vec4(224.045, 352.863, 904.418, 7.4), vec4(794.892, -7113.8434, 6.5, -5.8)));
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-27.12, 310.846, -525.817, -9.8);
    }
   vec2 donor_replacementGLF_dead5mouse = _GLF_FUZZED((-- GLF_dead1p));
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-3.9, 8817.4587, 782.852, -4.7);
    }
   vec2 donor_replacementGLF_dead5resolution = _GLF_FUZZED(unpackUnorm2x16(116466u));
   float donor_replacementGLF_dead5time = _GLF_FUZZED(30.54);
   {
    vec2 GLF_dead5pos = (donor_replacementGLF_dead5gl_FragCoord.xy / donor_replacementGLF_dead5resolution.xy) + donor_replacementGLF_dead5mouse / 1.1;
    float GLF_dead5x = fract(sin(GLF_dead5pos.x) * 9. + sin(GLF_dead5pos.x * 122. + 10.5) * 3. + sin(GLF_dead5pos.x * 100. + 0.2) * 99.);
    float GLF_dead5y = _GLF_IDENTITY(sin(GLF_dead5pos.y) * 15., (false ? _GLF_FUZZED(GLF_dead6time) : sin(GLF_dead5pos.y) * 15.)) + sin(GLF_dead5pos.x * 22. + donor_replacementGLF_dead5time) * 0.5 + sin(GLF_dead5pos.x * 8. + 0.2) * 2.;
    if(_GLF_DEAD(false))
     {
      _GLF_color = exp(vec4(674.288, -4.2, 9.3, 7676.4716));
     }
    float GLF_dead5r = fract(GLF_dead5y + sin(GLF_dead5pos.x + donor_replacementGLF_dead5time));
    float GLF_dead5b = fract(GLF_dead5y);
    donor_replacementGLF_dead5gl_FragColor = vec4(GLF_dead5r, smoothstep(GLF_dead5r, 2.03, .3) * .7, smoothstep(GLF_dead5b, 0.05, .34), 1.0);
   }
  }
 return fract((GLF_dead1p3.x + GLF_dead1p3.y) * _GLF_IDENTITY(GLF_dead1p3, (GLF_dead1p3) - vec3(0.0, 0.0, 0.0)).z);
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = vec4(-6190.0302, 2.7, 2477.6999, -47.04);
  }
}
void main(void)
{
 vec3 color;
 float len;
 float t = time;
 vec2 uv = gl_FragCoord.xy / resolution;
 if(_GLF_DEAD(false))
  {
   _GLF_color = sign(vec4(259.447, 7731.8606, -921.820, 457.898));
  }
 vec2 offset = uv;
 offset -= .5;
 offset.x *= resolution.x / resolution.y;
 if(_GLF_DEAD(false))
  {
   vec2 donor_replacementGLF_dead1grid = _GLF_FUZZED(log2(injectionSwitch));
   {
    float GLF_dead1m = GLF_dead1hash12(donor_replacementGLF_dead1grid.yx) * 12.;
    vec3(1. - GLF_dead1m * 0.08, _GLF_IDENTITY(GLF_dead1m, (GLF_dead1m) + sqrt(0.0)) * 0.03, GLF_dead1m * 0.06);
    if(_GLF_DEAD(false))
     {
      _GLF_color = mat2x4(mat3x2(962.947, -38.63, -4.6, 8.2, -96.27, -98.31))[1];
     }
   }
  }
 len = length(offset);
 t += 0.07;
 vec2 offset_unit_vector = offset / len;
 float firstMod = sin(t) + 1.0;
 float secondMod = abs(sin(len * 9.0 - t * 2.0));
 uv += _GLF_IDENTITY(offset_unit_vector * firstMod * secondMod + mouse * 2., (_GLF_IDENTITY(offset_unit_vector * firstMod * secondMod + mouse * 2., clamp(offset_unit_vector * firstMod * secondMod + mouse * 2., offset_unit_vector * firstMod * secondMod + mouse * 2., offset_unit_vector * firstMod * secondMod + mouse * 2.))) / vec2(1.0, 1.0));
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(false))
    {
     float donor_replacementGLF_dead8aD = _GLF_FUZZED(GLF_dead6time);
     vec3 donor_replacementGLF_dead8col = _GLF_FUZZED((++ color));
     float donor_replacementGLF_dead8layers = _GLF_FUZZED(GLF_dead6time);
     vec3 donor_replacementGLF_dead8rd = _GLF_FUZZED(vec3(8.1, 7.7, 5.5));
     vec3 donor_replacementGLF_dead8sp = _GLF_FUZZED(color);
     float donor_replacementGLF_dead8t = _GLF_FUZZED(GLF_dead6time);
     {
      vec3 GLF_dead8sc = GLF_dead8selfColor(donor_replacementGLF_dead8sp);
      donor_replacementGLF_dead8col += 8. * GLF_dead8sc * (donor_replacementGLF_dead8aD * donor_replacementGLF_dead8aD * (3. - 2. * donor_replacementGLF_dead8aD) / (1. + donor_replacementGLF_dead8t * donor_replacementGLF_dead8t * 0.85));
      donor_replacementGLF_dead8col += 1.0 * GLF_dead8reflectedColor(donor_replacementGLF_dead8sp, donor_replacementGLF_dead8rd);
      donor_replacementGLF_dead8layers ++;
     }
     if(_GLF_DEAD(false))
      {
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(334.657, vec3(5770.9012, 1.0, -0.2));
        }
       _GLF_color = round(vec4(748.439, 6148.9027, 2.4, -58.45));
      }
    }
   _GLF_color = mix(vec4(7.3, 9613.9118, -6854.4258, -475.643), _GLF_IDENTITY(vec4(-10.24, 8.9, 85.38, -62.48), max(vec4(-10.24, 8.9, 85.38, -62.48), vec4(-10.24, 8.9, 85.38, -62.48))), bvec4(true, true, true, _GLF_IDENTITY(true, true && (true))));
  }
 color[0] = .01 / length(abs(fract(uv) - .5));
 _GLF_IDENTITY(offset.x *= resolution.x / resolution.y, (offset.x *= resolution.x / resolution.y) / 1.0);
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-2.8, -0.9, 2638.8295, 131.467);
  }
 len = length(offset);
 t += 0.07;
 if(_GLF_DEAD(_GLF_FALSE(_GLF_IDENTITY(false, (false) || _GLF_FALSE(false, (gl_FragCoord.x < 0.0))), _GLF_IDENTITY((injectionSwitch.x > injectionSwitch.y), true && ((injectionSwitch.x > injectionSwitch.y))))))
  {
   _GLF_color = vec4(996.177, -9067.8963, -92.96, -5994.8487);
  }
 if(_GLF_DEAD(false))
  {
   mediump vec4 donor_replacementGLF_dead0gl_FragColor = _GLF_FUZZED(asin(vec4(8.7, 706.560, -840.158, 7813.8809)));
   if(_GLF_DEAD(_GLF_IDENTITY(false, false || (false))))
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      {
       vec3 donor_replacementGLF_dead9p = _GLF_FUZZED(color);
       {
        float GLF_dead9repeat = 5.0;
        vec2 GLF_dead9qxz = mod(donor_replacementGLF_dead9p.xz, GLF_dead9repeat) - 0.5 * GLF_dead9repeat;
        vec3 GLF_dead9q = vec3(GLF_dead9qxz.x, donor_replacementGLF_dead9p.y, GLF_dead9qxz.y);
        GLF_dead9opUnion(vec2(1.0, GLF_dead9shape(GLF_dead9q)), vec2(0.0, donor_replacementGLF_dead9p.y));
       }
      }
     const int donor_replacementGLF_dead2MENGER_ITERATIONS = _GLF_FUZZED(29182);
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      {
       _GLF_color = intBitsToFloat(ivec4(46981, 22804, 52904, 11760));
      }
     float donor_replacementGLF_dead2dist = _GLF_FUZZED((firstMod * _GLF_IDENTITY(time, clamp(time, time, _GLF_IDENTITY(time, (time) / 1.0)))));
     vec3 donor_replacementGLF_dead2p = _GLF_FUZZED(color);
     float donor_replacementGLF_dead2scale = _GLF_FUZZED(t);
     for(
         int GLF_dead2i = 1;
         GLF_dead2i < donor_replacementGLF_dead2MENGER_ITERATIONS;
         GLF_dead2i ++
     )
      {
       donor_replacementGLF_dead2dist = max(donor_replacementGLF_dead2dist, - GLF_dead2sdCrossRepScale(donor_replacementGLF_dead2p, donor_replacementGLF_dead2scale));
       _GLF_IDENTITY(donor_replacementGLF_dead2scale *= 3.0, (donor_replacementGLF_dead2scale *= _GLF_IDENTITY(3.0, (false ? _GLF_FUZZED(len) : _GLF_IDENTITY(3.0, (3.0) - 0.0)))) - 0.0);
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
        {
         float donor_replacementGLF_dead9depth = _GLF_FUZZED(reflect(donor_replacementGLF_dead2dist, donor_replacementGLF_dead2scale));
         int donor_replacementGLF_dead9i = _GLF_FUZZED(63061);
         float donor_replacementGLF_dead9origdepth = _GLF_FUZZED(mix(donor_replacementGLF_dead0gl_FragColor, donor_replacementGLF_dead0gl_FragColor, bvec4(_GLF_IDENTITY(true, ! (_GLF_IDENTITY(! (true), (false ? _GLF_FUZZED(true) : _GLF_IDENTITY(! (true), ! (! (! (true)))))))), true, false, true)).w);
         if(donor_replacementGLF_dead9i == 0)
          donor_replacementGLF_dead9origdepth = donor_replacementGLF_dead9depth;
        }
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_IDENTITY(0.0, (0.0) * cos(sin(0.0)))))))
      {
       float donor_replacementGLF_dead6shape = _GLF_FUZZED(donor_replacementGLF_dead2scale);
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
        {
         _GLF_color = sign(smoothstep(vec4(-1.7, 28.60, 4470.3732, 4262.5834), vec4(-7.3, 39.81, 7988.0590, 4706.2832), vec4(-1.1, -2.1, 575.531, 2077.3115)));
        }
       float donor_replacementGLF_dead6thickness = _GLF_FUZZED(offset.g);
       {
        donor_replacementGLF_dead6thickness - abs(donor_replacementGLF_dead6shape);
       }
      }
    }
   mediump vec4 donor_replacementGLF_dead0gl_FragCoord = _GLF_FUZZED(vec4(_GLF_IDENTITY(880.504, max(880.504, 880.504)), -9.3, -355.762, 7.0));
   vec2 donor_replacementGLF_dead0mouse = _GLF_FUZZED(mix(sqrt(offset), offset, len));
   vec2 donor_replacementGLF_dead0resolution = _GLF_FUZZED(fract(_GLF_IDENTITY(offset_unit_vector, (offset_unit_vector) - vec2(0.0, 0.0))));
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(vec2(34.51, -6.1), -22.14, 8.8);
    }
   {
    vec3 GLF_dead0color;
    float GLF_dead0len;
    float GLF_dead0t = time;
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
     {
      vec3 donor_replacementGLF_dead8pos = _GLF_FUZZED(intBitsToFloat(ivec3(49673, _GLF_IDENTITY(-70333, min(-70333, -70333)), 60683)));
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
       {
        _GLF_color = (- vec4(8.0, 756.019, -9.6, 50.23));
       }
      {
       const vec3 GLF_dead8dx = vec3(0.01, 0.0, 0.0);
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
        {
         _GLF_color = vec4(223.178, 9.7, 3.7, 676.273);
        }
       const vec3 GLF_dead8dy = vec3(0.0, 0.01, 0.0);
       const vec3 GLF_dead8dz = vec3(0.0, 0.0, 0.01);
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(-93.21, 4.7, 1.6, -2.2);
        }
       normalize(vec3(GLF_dead8map(donor_replacementGLF_dead8pos + GLF_dead8dx) - GLF_dead8map(donor_replacementGLF_dead8pos - GLF_dead8dx), GLF_dead8map(donor_replacementGLF_dead8pos + GLF_dead8dy) - GLF_dead8map(donor_replacementGLF_dead8pos - GLF_dead8dy), GLF_dead8map(donor_replacementGLF_dead8pos + GLF_dead8dz) - GLF_dead8map(_GLF_IDENTITY(donor_replacementGLF_dead8pos - GLF_dead8dz, min(_GLF_IDENTITY(donor_replacementGLF_dead8pos - GLF_dead8dz, (_GLF_IDENTITY(donor_replacementGLF_dead8pos - GLF_dead8dz, vec3(0.0, 0.0, 0.0) + (donor_replacementGLF_dead8pos - GLF_dead8dz))) * vec3(1.0, 1.0, 1.0)), _GLF_IDENTITY(donor_replacementGLF_dead8pos, clamp(donor_replacementGLF_dead8pos, donor_replacementGLF_dead8pos, _GLF_IDENTITY(donor_replacementGLF_dead8pos, min(donor_replacementGLF_dead8pos, donor_replacementGLF_dead8pos)))) - GLF_dead8dz)))));
      }
     }
    vec2 GLF_dead0uv = donor_replacementGLF_dead0gl_FragCoord.xy / donor_replacementGLF_dead0resolution;
    vec2 GLF_dead0offset = GLF_dead0uv;
    GLF_dead0offset -= .5;
    GLF_dead0offset.x *= _GLF_IDENTITY(donor_replacementGLF_dead0resolution, vec2(1.0, 1.0) * (_GLF_IDENTITY(donor_replacementGLF_dead0resolution, min(donor_replacementGLF_dead0resolution, donor_replacementGLF_dead0resolution)))).x / donor_replacementGLF_dead0resolution.y;
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
     {
      vec2 donor_replacementGLF_dead7s = _GLF_FUZZED(uv);
      float donor_replacementGLF_dead7td = _GLF_FUZZED(firstMod);
      if(abs(donor_replacementGLF_dead7s.x) < 0.001)
       vec2(_GLF_IDENTITY(donor_replacementGLF_dead7td, (false ? _GLF_FUZZED(vec3(812.751, _GLF_IDENTITY(-701.395, min(-701.395, -701.395)), 37.57)[0]) : donor_replacementGLF_dead7td)), donor_replacementGLF_dead7s.y);
     }
    GLF_dead0len = length(GLF_dead0offset);
    GLF_dead0t += 0.07;
    vec2 GLF_dead0offset_unit_vector = GLF_dead0offset / GLF_dead0len;
    float GLF_dead0firstMod = sin(_GLF_IDENTITY(GLF_dead0t, clamp(_GLF_IDENTITY(GLF_dead0t, (false ? _GLF_FUZZED(t) : GLF_dead0t)), GLF_dead0t, GLF_dead0t))) + 1.0;
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(1.9, 5567.1304, 5.9, 5.1);
     }
    float GLF_dead0secondMod = abs(sin(_GLF_IDENTITY(GLF_dead0len * 9.0, (true ? GLF_dead0len * 9.0 : _GLF_FUZZED(len))) - GLF_dead0t * 2.0));
    GLF_dead0uv += GLF_dead0offset_unit_vector * GLF_dead0firstMod * GLF_dead0secondMod + donor_replacementGLF_dead0mouse * 2.;
    GLF_dead0color[0] = .01 / length(abs(_GLF_IDENTITY(_GLF_IDENTITY(fract(GLF_dead0uv), clamp(fract(GLF_dead0uv), fract(GLF_dead0uv), fract(GLF_dead0uv))) - .5, (fract(GLF_dead0uv) - .5) + vec2(_GLF_ZERO(0.0, injectionSwitch.x), _GLF_ZERO(0.0, injectionSwitch.x)))));
    GLF_dead0offset.x *= _GLF_IDENTITY(donor_replacementGLF_dead0resolution.x, max(_GLF_IDENTITY(donor_replacementGLF_dead0resolution.x, min(donor_replacementGLF_dead0resolution.x, donor_replacementGLF_dead0resolution.x)), donor_replacementGLF_dead0resolution.x)) / _GLF_IDENTITY(donor_replacementGLF_dead0resolution.y, min(donor_replacementGLF_dead0resolution.y, donor_replacementGLF_dead0resolution.y));
    GLF_dead0len = length(_GLF_IDENTITY(GLF_dead0offset, max(GLF_dead0offset, _GLF_IDENTITY(GLF_dead0offset, (GLF_dead0offset) - _GLF_IDENTITY(vec2(0.0, 0.0), (vec2(0.0, 0.0)) + vec2(0.0, 0.0))))));
    GLF_dead0t += 0.07;
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
     {
      _GLF_color = vec4(-98.84, 414.193, 834.541, -1.3);
     }
    if(_GLF_DEAD(_GLF_IDENTITY(false, (false) || false)))
     {
      vec3 donor_replacementGLF_dead8p = _GLF_FUZZED((mouse * mat3x2(-4.9, -87.64, -8557.1872, 1.9, -0.9, 6.2)));
      vec3 donor_replacementGLF_dead8rd = _GLF_FUZZED((color * vec3(0.3, -2146.4549, 1382.1466)));
      {
       if(_GLF_DEAD(false))
        {
         _GLF_color = (4.4 * vec4(3.3, 6.2, -82.57, 644.076));
        }
       vec3 GLF_dead8Ks = vec3(0.7);
       float GLF_dead8shininess = 40.0;
       vec3 GLF_dead8n = _GLF_IDENTITY(GLF_dead8gradient(donor_replacementGLF_dead8p), (GLF_dead8gradient(donor_replacementGLF_dead8p)) - vec3(0.0, 0.0, 0.0));
       vec3 GLF_dead8ref = reflect(donor_replacementGLF_dead8rd, GLF_dead8n);
       vec3 GLF_dead8rc = vec3(0);
       vec3 GLF_dead8light_pos = vec3(15.0, 20.0, 2.0);
       vec3 GLF_dead8light_color = vec3(1.0, 1.0, 1.0);
       vec3 GLF_dead8vl = normalize(GLF_dead8light_pos - donor_replacementGLF_dead8p);
       vec3 GLF_dead8specular = vec3(max(0.0, dot(GLF_dead8vl, GLF_dead8ref)));
       vec3 GLF_dead8F = GLF_dead8fresnel(GLF_dead8Ks, normalize(_GLF_IDENTITY(GLF_dead8vl - donor_replacementGLF_dead8rd, (GLF_dead8vl - donor_replacementGLF_dead8rd) / vec3(1.0, 1.0, 1.0))), GLF_dead8vl);
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(6924.0763, 54.92, 545.982, -40.25);
        }
       GLF_dead8specular = pow(GLF_dead8specular, vec3(GLF_dead8shininess));
       GLF_dead8rc += GLF_dead8light_color * GLF_dead8specular;
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(7710.3489, 790.288, 293.611, -46.27);
        }
       GLF_dead8rc;
      }
     }
    GLF_dead0offset_unit_vector = GLF_dead0offset / GLF_dead0len;
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(6779.5839, 4.6, -3.1, 2.6);
     }
    GLF_dead0firstMod = sin(GLF_dead0t) + 1.0;
    _GLF_IDENTITY(GLF_dead0secondMod = abs(sin(GLF_dead0len * 9.0 - GLF_dead0t * 2.0)), (GLF_dead0secondMod = abs(sin(GLF_dead0len * 9.0 - GLF_dead0t * 2.0))) - 0.0);
    if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
     {
      float donor_replacementGLF_dead3c = _GLF_FUZZED(reflect(GLF_dead0len, t));
      float donor_replacementGLF_dead3p = _GLF_FUZZED(secondMod);
      {
       if(_GLF_DEAD(_GLF_IDENTITY(false, (_GLF_IDENTITY(false, false || (false))) && _GLF_TRUE(true, (_GLF_IDENTITY(gl_FragCoord.x >= 0.0, ! (! (_GLF_IDENTITY(gl_FragCoord.x >= 0.0, (false ? _GLF_FUZZED((GLF_dead0firstMod > GLF_dead0firstMod)) : gl_FragCoord.x >= 0.0))))))))))
        {
         _GLF_color = vec4(4962.5250, 6.5, -75.90, -1568.0944);
        }
       donor_replacementGLF_dead3c += donor_replacementGLF_dead3p;
      }
     }
    GLF_dead0uv += _GLF_IDENTITY(GLF_dead0offset_unit_vector * GLF_dead0firstMod, vec2(0.0, 0.0) + (_GLF_IDENTITY(GLF_dead0offset_unit_vector * GLF_dead0firstMod, (GLF_dead0offset_unit_vector * GLF_dead0firstMod) - abs(vec2(0.0, 0.0))))) * GLF_dead0secondMod + donor_replacementGLF_dead0mouse * 2.;
    if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
     {
      vec3 donor_replacementGLF_dead6col = _GLF_FUZZED((vec3(secondMod)));
      float donor_replacementGLF_dead6dist = _GLF_FUZZED(ceil(firstMod));
      vec2 donor_replacementGLF_dead6mouse = _GLF_FUZZED(sign(mouse));
      float donor_replacementGLF_dead6time = _GLF_FUZZED(exp(time));
      vec2 donor_replacementGLF_dead6uv = _GLF_FUZZED(GLF_dead0offset_unit_vector);
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
        {
         float donor_replacementGLF_dead9mat = _GLF_FUZZED(GLF_dead0secondMod);
         if(_GLF_DEAD(false))
          {
           _GLF_color = inversesqrt(vec4(-54.50, _GLF_IDENTITY(-1.7, min(-1.7, _GLF_IDENTITY(-1.7, max(_GLF_IDENTITY(-1.7, min(-1.7, -1.7)), _GLF_IDENTITY(-1.7, max(-1.7, -1.7)))))), 3.0, -91.13));
          }
         if(donor_replacementGLF_dead9mat < _GLF_IDENTITY(1.0, clamp(_GLF_IDENTITY(1.0, clamp(1.0, 1.0, 1.0)), 1.0, _GLF_IDENTITY(1.0, (true ? 1.0 : _GLF_FUZZED(GLF_dead0secondMod))))))
          {
           ;
          }
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          {
           _GLF_color = vec4(8.0, 7.4, -9.9, 1874.6343);
          }
        }
       float GLF_dead6outerCircle = GLF_dead6shape1(donor_replacementGLF_dead6uv * .99, 8., 1., .1);
       float GLF_dead6blueCircle = - (length(donor_replacementGLF_dead6uv) - 0.392);
       float GLF_dead6blueCircle2 = - (length(donor_replacementGLF_dead6uv) - mix(0.355, 0.36, GLF_dead6noise(donor_replacementGLF_dead6uv * 15.)));
       float GLF_dead6ring1 = GLF_dead6stripesCircle1(donor_replacementGLF_dead6uv, .5);
       float GLF_dead6ring2 = GLF_dead6stripesCircle2(donor_replacementGLF_dead6uv, .5);
       float GLF_dead6upperEyelidRing = GLF_dead6stripesCircle3(donor_replacementGLF_dead6uv - vec2(0., - .5), .5);
       float GLF_dead6lowerEyelidRing = GLF_dead6stripesCircle4(donor_replacementGLF_dead6uv + vec2(0., - .5), .5);
       vec2 GLF_dead6innerCircleNoise = (GLF_dead6noise2(donor_replacementGLF_dead6uv * 2. + donor_replacementGLF_dead6time) - .5) * .05;
       float GLF_dead6innerCircle = GLF_dead6shape1((donor_replacementGLF_dead6uv + GLF_dead6innerCircleNoise) * 1.4, 9., .25, - .07);
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(7.5, 1.3, -9.9, -0.1);
        }
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(17.00, -2.1, 5547.8866, -3.3);
        }
       float GLF_dead6open = GLF_dead6fit01(.0, _GLF_IDENTITY(.005, (false ? _GLF_FUZZED(length(injectionSwitch)) : .005)), sin(donor_replacementGLF_dead6time * 2.) * _GLF_IDENTITY(.5, max(.5, _GLF_IDENTITY(.5, max(.5, .5)))) + .5);
       float GLF_dead6upperEyeAperture = _GLF_IDENTITY(mix(.15, .23, max(0., donor_replacementGLF_dead6mouse.y) * 2.), (true ? mix(.15, .23, max(0., donor_replacementGLF_dead6mouse.y) * 2.) : _GLF_FUZZED(GLF_dead6upperEyelidRing)));
       if(_GLF_DEAD(_GLF_IDENTITY(false, ! (! (false)))))
        {
         _GLF_color = atan(vec4(-8.8, -5.2, -46.74, 3.3));
        }
       float GLF_dead6lowerEyeAperture = mix(.1, .23, clamp(max(_GLF_IDENTITY(0., clamp(0., 0., 0.)), - donor_replacementGLF_dead6mouse.y + .3) * 3., 0., 1.));
       float GLF_dead6c = .28;
       float GLF_dead6b = mix(.001, GLF_dead6upperEyeAperture, GLF_dead6open);
       float GLF_dead6a, GLF_dead6r;
       GLF_dead6solveCircle(GLF_dead6c, GLF_dead6b, GLF_dead6r, GLF_dead6a);
       float GLF_dead6upperEye = - (length(donor_replacementGLF_dead6uv + GLF_dead6innerCircleNoise - vec2(0., .01 - GLF_dead6a)) - GLF_dead6r);
       float GLF_dead6upperEyelid = - (length(donor_replacementGLF_dead6uv + GLF_dead6innerCircleNoise) - mix(0.27, 0.28, GLF_dead6noise(donor_replacementGLF_dead6uv * 15. + 3.4)));
       GLF_dead6upperEyelid = min(GLF_dead6upperEyelid, - GLF_dead6upperEye);
       GLF_dead6b = mix(.001, GLF_dead6lowerEyeAperture, GLF_dead6open);
       GLF_dead6solveCircle(GLF_dead6c, _GLF_IDENTITY(GLF_dead6b, min(_GLF_IDENTITY(GLF_dead6b, max(GLF_dead6b, GLF_dead6b)), GLF_dead6b)), GLF_dead6r, GLF_dead6a);
       float GLF_dead6lowerEye = - (length(donor_replacementGLF_dead6uv + GLF_dead6innerCircleNoise + vec2(0., - .01 - GLF_dead6a)) - GLF_dead6r);
       float GLF_dead6lowerEyelid = - (length(donor_replacementGLF_dead6uv + GLF_dead6innerCircleNoise) - mix(0.27, 0.275, GLF_dead6noise(donor_replacementGLF_dead6uv * 15. + 3.464)));
       GLF_dead6lowerEyelid = min(GLF_dead6lowerEyelid, - GLF_dead6lowerEye);
       GLF_dead6b = GLF_dead6lowerEyeAperture;
       GLF_dead6solveCircle(GLF_dead6c, GLF_dead6b, GLF_dead6r, GLF_dead6a);
       vec2 GLF_dead6eyeCenter = - vec2(0., - .025 - GLF_dead6a);
       float GLF_dead6eye = 1.;
       GLF_dead6eye = min(GLF_dead6eye, GLF_dead6upperEye - .01);
       GLF_dead6eye = min(GLF_dead6eye, GLF_dead6lowerEye - .01);
       GLF_dead6ring1 = GLF_dead6smin(GLF_dead6ring1, - GLF_dead6innerCircle - mix(.0, .03, GLF_dead6noise(donor_replacementGLF_dead6uv * 12. + donor_replacementGLF_dead6time * .5)), 0.02);
       GLF_dead6upperEyelidRing = GLF_dead6smin(_GLF_IDENTITY(GLF_dead6upperEyelidRing, (_GLF_TRUE(true, (gl_FragCoord.y >= 0.0)) ? GLF_dead6upperEyelidRing : _GLF_FUZZED(donor_replacementGLF_dead6dist))), GLF_dead6upperEyelid - .01, 0.01);
       GLF_dead6lowerEyelidRing = min(GLF_dead6lowerEyelidRing, GLF_dead6lowerEyelid);
       vec2 GLF_dead6eyeOffset = donor_replacementGLF_dead6mouse * vec2(.2, .5) + vec2(.0, - .1);
       GLF_dead6eyeOffset.y = min(GLF_dead6eyeOffset.y, 0.03);
       float GLF_dead6eyeRing = GLF_dead6stripesCircle(donor_replacementGLF_dead6uv - GLF_dead6eyeCenter - GLF_dead6eyeOffset, StripesCircleOpt(.05, _GLF_IDENTITY(.36, min(.36, .36)), 2.5, - .05, 0.), StripesOpt(.5, 0., 0.));
       float GLF_dead6pupille = - (length(donor_replacementGLF_dead6uv - GLF_dead6eyeCenter - _GLF_IDENTITY(GLF_dead6eyeOffset, vec2(0.0, 0.0) + (_GLF_IDENTITY(GLF_dead6eyeOffset, (GLF_dead6eyeOffset) * vec2(1.0, 1.0))))) - .09);
       GLF_dead6eyeRing = min(GLF_dead6eyeRing, - .03 - GLF_dead6upperEyelid) * .2;
       float GLF_dead6eyeRingFade = clamp(_GLF_IDENTITY((- GLF_dead6upperEyelid * 7.) * (- GLF_dead6lowerEyelid * 7.), ((- GLF_dead6upperEyelid * 7.) * (- GLF_dead6lowerEyelid * 7.)) / 1.0) + .2, 0., .9);
       float GLF_dead6eyeWhite = length(donor_replacementGLF_dead6uv + GLF_dead6innerCircleNoise - GLF_dead6eyeCenter) - mix(.325, .31, GLF_dead6noise(donor_replacementGLF_dead6uv * 8. + 45.1 + donor_replacementGLF_dead6time * .5)) * 3.4 * pow(GLF_dead6r, 1.1);
       vec3 GLF_dead6eyeLayer = vec3(.0, .3, .6);
       GLF_dead6eyeLayer = mix(GLF_dead6eyeLayer, vec3(1., .292, _GLF_IDENTITY(.173, 1.0 * (.173))), GLF_dead6fill(GLF_dead6eyeRing) * GLF_dead6eyeRingFade);
       GLF_dead6eyeLayer = mix(GLF_dead6eyeLayer, vec3(1.), GLF_dead6fill(GLF_dead6pupille));
       GLF_dead6eyeLayer = mix(GLF_dead6eyeLayer, vec3(1.), GLF_dead6fill(GLF_dead6eyeWhite));
       donor_replacementGLF_dead6col = mix(donor_replacementGLF_dead6col, vec3(_GLF_IDENTITY(.14, min(_GLF_IDENTITY(.14, min(.14, .14)), .14)), .21, .3), GLF_dead6fill(GLF_dead6outerCircle));
       donor_replacementGLF_dead6col = _GLF_IDENTITY(mix(donor_replacementGLF_dead6col, vec3(.1, .3, .5), _GLF_IDENTITY(GLF_dead6fill(GLF_dead6blueCircle), 1.0 * (_GLF_IDENTITY(GLF_dead6fill(GLF_dead6blueCircle), (true ? GLF_dead6fill(GLF_dead6blueCircle) : _GLF_FUZZED(GLF_dead6r)))))), (_GLF_IDENTITY(mix(donor_replacementGLF_dead6col, vec3(_GLF_IDENTITY(.1, 1.0 * (.1)), .3, .5), GLF_dead6fill(GLF_dead6blueCircle)), (mix(donor_replacementGLF_dead6col, vec3(.1, .3, .5), GLF_dead6fill(GLF_dead6blueCircle))) - vec3(0.0, 0.0, _GLF_IDENTITY(0.0, max(0.0, 0.0))))) * exp(vec3(0.0, 0.0, 0.0)));
       donor_replacementGLF_dead6col = mix(donor_replacementGLF_dead6col, vec3(.7, .8, .85), GLF_dead6fill(GLF_dead6blueCircle2));
       donor_replacementGLF_dead6col = mix(donor_replacementGLF_dead6col, vec3(0.65, 0.3, 0.6), GLF_dead6fill(_GLF_IDENTITY(GLF_dead6ring1, 0.0 + (GLF_dead6ring1)) * .3));
       donor_replacementGLF_dead6col = mix(donor_replacementGLF_dead6col, vec3(0.9, 0.8, 0.2), _GLF_IDENTITY(GLF_dead6fill(GLF_dead6ring2 * .25), (true ? GLF_dead6fill(GLF_dead6ring2 * .25) : _GLF_FUZZED(GLF_dead6lowerEyelid))));
       donor_replacementGLF_dead6col = mix(donor_replacementGLF_dead6col, vec3(.14, .21, .3), GLF_dead6fill(GLF_dead6innerCircle));
       donor_replacementGLF_dead6col = mix(donor_replacementGLF_dead6col, GLF_dead6eyeLayer, GLF_dead6fill(GLF_dead6eye));
       donor_replacementGLF_dead6col = mix(donor_replacementGLF_dead6col, _GLF_IDENTITY(vec3(1., .292, .173), max(_GLF_IDENTITY(vec3(1., .292, .173), min(vec3(1., .292, .173), vec3(1., .292, .173))), vec3(1., .292, .173))), GLF_dead6fill(GLF_dead6upperEyelid));
       donor_replacementGLF_dead6col = _GLF_IDENTITY(mix(donor_replacementGLF_dead6col, vec3(.75, .102, .073), GLF_dead6fill(GLF_dead6upperEyelidRing)), vec3(1.0, 1.0, 1.0) * (mix(donor_replacementGLF_dead6col, vec3(.75, .102, .073), GLF_dead6fill(GLF_dead6upperEyelidRing))));
       donor_replacementGLF_dead6col = mix(_GLF_IDENTITY(donor_replacementGLF_dead6col, clamp(_GLF_IDENTITY(donor_replacementGLF_dead6col, (donor_replacementGLF_dead6col) / vec3(1.0, 1.0, 1.0)), _GLF_IDENTITY(donor_replacementGLF_dead6col, max(donor_replacementGLF_dead6col, donor_replacementGLF_dead6col)), _GLF_IDENTITY(donor_replacementGLF_dead6col, clamp(donor_replacementGLF_dead6col, donor_replacementGLF_dead6col, donor_replacementGLF_dead6col)))), vec3(.292, .85, .653), GLF_dead6fill(GLF_dead6lowerEyelid));
       donor_replacementGLF_dead6col = mix(donor_replacementGLF_dead6col, vec3(.75), GLF_dead6fill(GLF_dead6lowerEyelidRing));
       donor_replacementGLF_dead6dist = GLF_dead6outerCircle;
       donor_replacementGLF_dead6col;
      }
     }
    GLF_dead0color[1] = .01 / length(abs(_GLF_IDENTITY(fract(GLF_dead0uv) - .5, (fract(GLF_dead0uv) - .5) + vec2(0.0, 0.0))));
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
     {
      vec4 donor_replacementGLF_dead4pos = _GLF_FUZZED(vec4(-334.686, -9768.2941, -0.2, _GLF_IDENTITY(5202.8146, _GLF_IDENTITY((5202.8146), min(_GLF_IDENTITY((5202.8146), max((5202.8146), _GLF_IDENTITY((5202.8146), min((5202.8146), (5202.8146))))), _GLF_IDENTITY((5202.8146), (true ? (5202.8146) : _GLF_FUZZED((t --)))))) / 1.0)));
      {
       vec3(GLF_dead4checker(donor_replacementGLF_dead4pos.xz));
      }
     }
    donor_replacementGLF_dead0gl_FragColor = vec4(GLF_dead0color / _GLF_IDENTITY(.1, min(.1, .1)), time);
   }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    {
     _GLF_color = vec4(8.0, -224.203, -80.99, 64.64);
    }
  }
 offset_unit_vector = offset / len;
 if(_GLF_DEAD(false))
  {
   _GLF_color = refract(vec4(-0.0, -7483.5431, _GLF_IDENTITY(3.4, clamp(3.4, 3.4, 3.4)), 8.6), vec4(75.48, -7225.6399, -4.0, -6.9), 8026.2028);
  }
 firstMod = sin(t) + 1.0;
 secondMod = abs(sin(len * 9.0 - _GLF_IDENTITY(t, clamp(t, _GLF_IDENTITY(t, (false ? _GLF_FUZZED(inversesqrt(GLF_dead8iTime)) : t)), _GLF_IDENTITY(t, (t) / 1.0))) * 2.0));
 uv += offset_unit_vector * firstMod * secondMod + mouse * 2.;
 color[1] = .01 / length(abs(fract(uv) - _GLF_IDENTITY(.5, (.5) * 1.0)));
 _GLF_color = vec4(_GLF_IDENTITY(color, min(color, _GLF_IDENTITY(_GLF_IDENTITY(color, vec3(0.0, 0.0, 0.0) + (color)), min(color, color)))) / .1, time);
}
