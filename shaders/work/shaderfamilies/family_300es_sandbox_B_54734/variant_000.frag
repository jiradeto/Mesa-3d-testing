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

const int GLF_dead8MENGER_ITERATIONS = 5;

float GLF_dead8sdCross(vec3 GLF_dead8p)
{
 _GLF_IDENTITY(GLF_dead8p = _GLF_IDENTITY(_GLF_IDENTITY(abs(GLF_dead8p), clamp(abs(GLF_dead8p), _GLF_IDENTITY(abs(GLF_dead8p), max(abs(GLF_dead8p), abs(GLF_dead8p))), abs(GLF_dead8p))), min(abs(_GLF_IDENTITY(GLF_dead8p, clamp(GLF_dead8p, GLF_dead8p, _GLF_IDENTITY(GLF_dead8p, max(_GLF_IDENTITY(GLF_dead8p, min(GLF_dead8p, GLF_dead8p)), GLF_dead8p))))), abs(GLF_dead8p))), vec3(0.0, 0.0, 0.0) + (GLF_dead8p = _GLF_IDENTITY(abs(GLF_dead8p), min(abs(GLF_dead8p), abs(GLF_dead8p)))));
 vec3 GLF_dead8d = vec3(max(GLF_dead8p.x, _GLF_IDENTITY(GLF_dead8p.y + 0.07, 1.0 * (GLF_dead8p.y + 0.07))), max(GLF_dead8p.y, _GLF_IDENTITY(_GLF_IDENTITY(GLF_dead8p, (GLF_dead8p) + vec3(0.0, 0.0, _GLF_IDENTITY(0.0, (true ? 0.0 : _GLF_FUZZED(time))))), vec3(1.0, 1.0, 1.0) * (_GLF_IDENTITY(GLF_dead8p, clamp(GLF_dead8p, _GLF_IDENTITY(GLF_dead8p, (GLF_dead8p) - vec3(0.0, 0.0, 0.0)), GLF_dead8p)))).z), max(_GLF_IDENTITY(_GLF_IDENTITY(GLF_dead8p, min(GLF_dead8p, GLF_dead8p)), max(GLF_dead8p, _GLF_IDENTITY(GLF_dead8p, min(GLF_dead8p, GLF_dead8p)))).z, GLF_dead8p.x));
 return min(GLF_dead8d.x, _GLF_IDENTITY(min(GLF_dead8d.y, GLF_dead8d.z), max(min(GLF_dead8d.y, GLF_dead8d.z), min(GLF_dead8d.y, GLF_dead8d.z)))) - (_GLF_IDENTITY(_GLF_IDENTITY(1.0 / 2.23, min(1.0 / 2.23, 1.0 / 2.23)), (1.0 / 2.23) * 1.0));
}
float GLF_dead8sdCrossRep(vec3 GLF_dead8p)
{
 vec3 GLF_dead8q = mod(GLF_dead8p + 1.0, 2.0) - 1.0;
 if(_GLF_DEAD(false))
  {
   _GLF_color = _GLF_IDENTITY(vec4(vec2(3.5, 3.1), -5.8, _GLF_IDENTITY(-2146.4892, (-2146.4892) * 1.0)), (vec4(vec2(3.5, 3.1), -5.8, _GLF_IDENTITY(-2146.4892, (-2146.4892) * 1.0))) * length(normalize(vec4(1.0, 1.0, 1.0, 1.0))));
  }
 return GLF_dead8sdCross(GLF_dead8q);
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = mod(vec4(_GLF_IDENTITY(-4034.9207, clamp(-4034.9207, _GLF_IDENTITY(-4034.9207, min(-4034.9207, -4034.9207)), -4034.9207)), -6.9, -0.1, 4.7), vec4(3.0, 6.7, 58.82, -7019.4204));
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-7457.0539, _GLF_IDENTITY(-7.3, min(-7.3, _GLF_IDENTITY(-7.3, 1.0 * (-7.3)))), -462.264, 4.2).arab;
  }
}
float GLF_dead8sdCrossRepScale(vec3 GLF_dead8p, float GLF_dead8s)
{
 return _GLF_IDENTITY(GLF_dead8sdCrossRep(GLF_dead8p * GLF_dead8s), (_GLF_IDENTITY(GLF_dead8sdCrossRep(GLF_dead8p * GLF_dead8s), (false ? _GLF_FUZZED(GLF_dead6time) : GLF_dead8sdCrossRep(GLF_dead8p * GLF_dead8s)))) / sqrt(1.0)) / GLF_dead8s;
}
float GLF_dead8scene(vec3 GLF_dead8p)
{
 float GLF_dead8scale = 1.0;
 float GLF_dead8dist = 0.0;
 for(
     int GLF_dead8i = 1;
     GLF_dead8i < GLF_dead8MENGER_ITERATIONS;
     GLF_dead8i ++
 )
  {
   GLF_dead8dist = max(GLF_dead8dist, - GLF_dead8sdCrossRepScale(GLF_dead8p, GLF_dead8scale));
   GLF_dead8scale *= 3.0;
  }
 return GLF_dead8dist;
}
float GLF_dead6dBox(vec3 GLF_dead6p, vec3 GLF_dead6b)
{
 vec3 GLF_dead6d = abs(GLF_dead6p) - _GLF_IDENTITY(GLF_dead6b, clamp(_GLF_IDENTITY(GLF_dead6b, (_GLF_IDENTITY(GLF_dead6b, (GLF_dead6b) * vec3(1.0, 1.0, _GLF_IDENTITY(1.0, min(1.0, 1.0))))) - vec3(0.0, 0.0, 0.0)), _GLF_IDENTITY(GLF_dead6b, clamp(GLF_dead6b, GLF_dead6b, GLF_dead6b)), GLF_dead6b));
 return min(max(GLF_dead6d.x, _GLF_IDENTITY(max(_GLF_IDENTITY(GLF_dead6d, min(GLF_dead6d, GLF_dead6d)).y, GLF_dead6d.z), min(max(_GLF_IDENTITY(GLF_dead6d, (_GLF_IDENTITY(GLF_dead6d, clamp(GLF_dead6d, GLF_dead6d, GLF_dead6d))) - vec3(0.0, 0.0, 0.0)).y, GLF_dead6d.z), _GLF_IDENTITY(max(GLF_dead6d.y, GLF_dead6d.z), (max(GLF_dead6d.y, GLF_dead6d.z)) - 0.0)))), _GLF_IDENTITY(0.0, min(0.0, 0.0))) + length(max(_GLF_IDENTITY(GLF_dead6d, (GLF_dead6d) / vec3(1.0, 1.0, 1.0)), 0.0)) - 0.2;
}
vec2 GLF_dead6rep(inout vec2 GLF_dead6p, vec2 GLF_dead6o)
{
 vec2 GLF_dead6c = floor(_GLF_IDENTITY(_GLF_IDENTITY((GLF_dead6p + GLF_dead6o) / (_GLF_IDENTITY(GLF_dead6o, vec2(0.0, 0.0) + (GLF_dead6o)) * 2.0), (_GLF_IDENTITY((GLF_dead6p + GLF_dead6o) / (_GLF_IDENTITY(GLF_dead6o * 2.0, max(GLF_dead6o * 2.0, GLF_dead6o * 2.0))), clamp((GLF_dead6p + _GLF_IDENTITY(_GLF_IDENTITY(GLF_dead6o, max(GLF_dead6o, GLF_dead6o)), max(_GLF_IDENTITY(GLF_dead6o, clamp(GLF_dead6o, GLF_dead6o, GLF_dead6o)), GLF_dead6o))) / (GLF_dead6o * 2.0), (GLF_dead6p + GLF_dead6o) / (GLF_dead6o * 2.0), _GLF_IDENTITY((_GLF_IDENTITY(GLF_dead6p, clamp(GLF_dead6p, GLF_dead6p, _GLF_IDENTITY(GLF_dead6p, (GLF_dead6p) - vec2(0.0, 0.0)))) + GLF_dead6o), ((_GLF_IDENTITY(GLF_dead6p, clamp(GLF_dead6p, GLF_dead6p, _GLF_IDENTITY(GLF_dead6p, (GLF_dead6p) - vec2(0.0, 0.0)))) + GLF_dead6o)) + vec2(0.0, 0.0)) / (GLF_dead6o * 2.0)))) * vec2(1.0, 1.0)), min((GLF_dead6p + _GLF_IDENTITY(GLF_dead6o, (_GLF_IDENTITY(GLF_dead6o, (GLF_dead6o) + vec2(0.0, 0.0))) + sqrt(vec2(0.0, 0.0)))) / (GLF_dead6o * 2.0), (GLF_dead6p + GLF_dead6o) / (GLF_dead6o * 2.0))));
 _GLF_IDENTITY(GLF_dead6p = _GLF_IDENTITY(mod(GLF_dead6p + GLF_dead6o, GLF_dead6o * 2.00) - GLF_dead6o, max(_GLF_IDENTITY(_GLF_IDENTITY(mod(GLF_dead6p + GLF_dead6o, GLF_dead6o * 2.00), clamp(_GLF_IDENTITY(mod(GLF_dead6p + GLF_dead6o, GLF_dead6o * 2.00), max(_GLF_IDENTITY(mod(GLF_dead6p + GLF_dead6o, GLF_dead6o * 2.00), clamp(mod(GLF_dead6p + GLF_dead6o, GLF_dead6o * 2.00), _GLF_IDENTITY(mod(GLF_dead6p + GLF_dead6o, GLF_dead6o * 2.00), clamp(mod(GLF_dead6p + GLF_dead6o, GLF_dead6o * 2.00), mod(GLF_dead6p + GLF_dead6o, GLF_dead6o * 2.00), mod(GLF_dead6p + GLF_dead6o, GLF_dead6o * 2.00))), mod(GLF_dead6p + GLF_dead6o, GLF_dead6o * 2.00))), mod(GLF_dead6p + GLF_dead6o, GLF_dead6o * 2.00))), mod(_GLF_IDENTITY(GLF_dead6p + GLF_dead6o, (_GLF_IDENTITY(GLF_dead6p + GLF_dead6o, max(GLF_dead6p + GLF_dead6o, GLF_dead6p + GLF_dead6o))) * vec2(1.0, 1.0)), GLF_dead6o * 2.00), mod(_GLF_IDENTITY(GLF_dead6p + GLF_dead6o, max(GLF_dead6p + GLF_dead6o, GLF_dead6p + GLF_dead6o)), GLF_dead6o * 2.00))) - GLF_dead6o, clamp(mod(GLF_dead6p + GLF_dead6o, GLF_dead6o * 2.00) - GLF_dead6o, mod(_GLF_IDENTITY(_GLF_IDENTITY(GLF_dead6p + GLF_dead6o, max(GLF_dead6p + GLF_dead6o, GLF_dead6p + GLF_dead6o)), max(GLF_dead6p + GLF_dead6o, _GLF_IDENTITY(GLF_dead6p + GLF_dead6o, max(_GLF_IDENTITY(GLF_dead6p + GLF_dead6o, clamp(GLF_dead6p + GLF_dead6o, GLF_dead6p + GLF_dead6o, _GLF_IDENTITY(GLF_dead6p, min(GLF_dead6p, _GLF_IDENTITY(GLF_dead6p, (GLF_dead6p) + vec2(0.0, 0.0)))) + GLF_dead6o)), GLF_dead6p + GLF_dead6o)))), GLF_dead6o * 2.00) - GLF_dead6o, mod(GLF_dead6p + GLF_dead6o, GLF_dead6o * 2.00) - GLF_dead6o)), mod(GLF_dead6p + GLF_dead6o, GLF_dead6o * 2.00) - GLF_dead6o)), (GLF_dead6p = _GLF_IDENTITY(mod(GLF_dead6p + GLF_dead6o, _GLF_IDENTITY(GLF_dead6o * 2.00, max(GLF_dead6o * 2.00, GLF_dead6o * 2.00))) - GLF_dead6o, max(_GLF_IDENTITY(mod(GLF_dead6p + GLF_dead6o, _GLF_IDENTITY(GLF_dead6o, min(_GLF_IDENTITY(GLF_dead6o, (GLF_dead6o) * vec2(1.0, 1.0)), _GLF_IDENTITY(GLF_dead6o, vec2(1.0, 1.0) * (GLF_dead6o)))) * 2.00) - GLF_dead6o, clamp(_GLF_IDENTITY(mod(GLF_dead6p + GLF_dead6o, GLF_dead6o * 2.00), max(mod(GLF_dead6p + GLF_dead6o, GLF_dead6o * 2.00), mod(GLF_dead6p + GLF_dead6o, GLF_dead6o * 2.00))) - GLF_dead6o, mod(_GLF_IDENTITY(GLF_dead6p + GLF_dead6o, max(_GLF_IDENTITY(GLF_dead6p + GLF_dead6o, clamp(_GLF_IDENTITY(_GLF_IDENTITY(GLF_dead6p, max(GLF_dead6p, GLF_dead6p)) + GLF_dead6o, _GLF_IDENTITY((GLF_dead6p + GLF_dead6o) + vec2(0.0, 0.0), clamp(_GLF_IDENTITY((GLF_dead6p + GLF_dead6o) + vec2(0.0, 0.0), max((GLF_dead6p + GLF_dead6o) + vec2(0.0, 0.0), _GLF_IDENTITY((GLF_dead6p + GLF_dead6o) + vec2(0.0, 0.0), min((GLF_dead6p + GLF_dead6o) + vec2(0.0, 0.0), (GLF_dead6p + GLF_dead6o) + vec2(0.0, 0.0))))), (GLF_dead6p + GLF_dead6o) + vec2(0.0, 0.0), (GLF_dead6p + GLF_dead6o) + vec2(0.0, 0.0)))), GLF_dead6p + GLF_dead6o, _GLF_IDENTITY(GLF_dead6p + GLF_dead6o, clamp(GLF_dead6p + GLF_dead6o, _GLF_IDENTITY(_GLF_IDENTITY(GLF_dead6p, min(GLF_dead6p, _GLF_IDENTITY(GLF_dead6p, _GLF_IDENTITY((GLF_dead6p) + vec2(0.0, 0.0), vec2(_GLF_ONE(1.0, injectionSwitch.y), _GLF_ONE(1.0, injectionSwitch.y)) * ((GLF_dead6p) + vec2(0.0, 0.0)))))) + GLF_dead6o, max(GLF_dead6p + GLF_dead6o, GLF_dead6p + GLF_dead6o)), GLF_dead6p + GLF_dead6o)))), GLF_dead6p + _GLF_IDENTITY(GLF_dead6o, max(GLF_dead6o, GLF_dead6o)))), GLF_dead6o * 2.00) - _GLF_IDENTITY(GLF_dead6o, max(GLF_dead6o, _GLF_IDENTITY(GLF_dead6o, min(GLF_dead6o, GLF_dead6o)))), mod(GLF_dead6p + GLF_dead6o, GLF_dead6o * 2.00) - GLF_dead6o)), mod(GLF_dead6p + GLF_dead6o, GLF_dead6o * 2.00) - GLF_dead6o))) / vec2(1.0, 1.0));
 return _GLF_IDENTITY(GLF_dead6c, max(GLF_dead6c, GLF_dead6c));
 if(_GLF_DEAD(false))
  {
   vec2 donor_replacementGLF_dead7b = _GLF_FUZZED(_GLF_color.br);
   float donor_replacementGLF_dead7p = _GLF_FUZZED(time);
   {
    if(_GLF_DEAD(_GLF_FALSE(false, _GLF_IDENTITY((gl_FragCoord.y < 0.0), (_GLF_IDENTITY((gl_FragCoord.y < 0.0), (_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)) ? _GLF_FUZZED(false) : (gl_FragCoord.y < 0.0)))) || false))))
     {
      _GLF_color = min(vec4(-88.37, -6.4, 16.21, -0.9), vec4(70.38, 2.8, 58.40, 29.83));
     }
    if(_GLF_DEAD(_GLF_IDENTITY(_GLF_IDENTITY(false, false || (false)), (false) && true)))
     {
      _GLF_color = (vec4(5.9, _GLF_IDENTITY(8.0, (_GLF_IDENTITY(8.0, (8.0) / 1.0)) - 0.0), 26.67, 51.76));
     }
    donor_replacementGLF_dead7b.y -= donor_replacementGLF_dead7p;
   }
  }
}
vec2 GLF_dead6map(vec3 GLF_dead6p)
{
 _GLF_IDENTITY(GLF_dead6p.y += 1.0, (false ? _GLF_FUZZED(time) : GLF_dead6p.y += _GLF_IDENTITY(1.0, (_GLF_IDENTITY(1.0, (_GLF_TRUE(true, (_GLF_IDENTITY(gl_FragCoord.x >= 0.0, (false ? _GLF_FUZZED(false) : _GLF_IDENTITY(gl_FragCoord.x >= 0.0, _GLF_IDENTITY((true ? gl_FragCoord.x >= 0.0 : _GLF_FUZZED(true)), false || ((true ? gl_FragCoord.x >= 0.0 : _GLF_FUZZED(true))))))))) ? 1.0 : _GLF_FUZZED(time)))) + 0.0)));
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   vec2 donor_replacementGLF_dead7b = _GLF_FUZZED(mouse);
   float donor_replacementGLF_dead7p = _GLF_FUZZED(9862.6865);
   {
    _GLF_IDENTITY(donor_replacementGLF_dead7b.x -= donor_replacementGLF_dead7p, sin(0.0) + (donor_replacementGLF_dead7b.x -= donor_replacementGLF_dead7p));
   }
  }
 if(_GLF_DEAD(_GLF_IDENTITY(false, (true ? false : _GLF_FUZZED(true)))))
  {
   _GLF_color = vec4(_GLF_IDENTITY(57.58, clamp(_GLF_IDENTITY(57.58, min(57.58, _GLF_IDENTITY(57.58, 1.0 * (57.58)))), _GLF_IDENTITY(57.58, (true ? 57.58 : _GLF_FUZZED(628.602))), 57.58)), 27.96, -9.5, 5.9);
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-9.8, 8.8, 48.20, 13.75);
    }
  }
 vec2 GLF_dead6c = GLF_dead6rep(GLF_dead6p.xz, _GLF_IDENTITY(vec2(.7), vec2(1.0, 1.0) * (vec2(.7))));
 return vec2(GLF_dead6dBox(GLF_dead6p, vec3(.5, 1.0 + 0.27 * cos(GLF_dead6c.x * GLF_dead6time + 1.0 * GLF_dead6c.x + 3.0 * _GLF_IDENTITY(GLF_dead6c.y, max(GLF_dead6c.y, _GLF_IDENTITY(GLF_dead6c.y, clamp(GLF_dead6c.y, GLF_dead6c.y, _GLF_IDENTITY(GLF_dead6c.y, min(GLF_dead6c.y, GLF_dead6c.y))))))), .5)), abs(GLF_dead6c.x + _GLF_IDENTITY(GLF_dead6c.y, (false ? _GLF_FUZZED(time) : _GLF_IDENTITY(GLF_dead6c.y, clamp(GLF_dead6c.y, _GLF_IDENTITY(GLF_dead6c.y, clamp(GLF_dead6c.y, GLF_dead6c.y, GLF_dead6c.y)), GLF_dead6c.y))))));
}
float GLF_dead0dist_sphere(vec3 GLF_dead0pos, vec3 GLF_dead0cent, float GLF_dead0radius)
{
 if(_GLF_DEAD(_GLF_IDENTITY(false, ! _GLF_IDENTITY((! (false)), ((! (false))) && true))))
  {
   vec2 donor_replacementGLF_dead1seed = _GLF_FUZZED(_GLF_IDENTITY(cos(_GLF_IDENTITY(injectionSwitch, clamp(injectionSwitch, _GLF_IDENTITY(injectionSwitch, clamp(_GLF_IDENTITY(injectionSwitch, (injectionSwitch) * vec2(1.0, 1.0)), _GLF_IDENTITY(injectionSwitch, vec2(1.0, 1.0) * (injectionSwitch)), injectionSwitch)), injectionSwitch))), max(cos(injectionSwitch), cos(injectionSwitch))));
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    {
     if(_GLF_IDENTITY(donor_replacementGLF_dead1seed.x, clamp(donor_replacementGLF_dead1seed.x, _GLF_IDENTITY(donor_replacementGLF_dead1seed.x, 1.0 * (donor_replacementGLF_dead1seed.x)), donor_replacementGLF_dead1seed.x)) > 0.0)
      {
       GLF_dead0radius = clamp(GLF_dead0radius + mix(donor_replacementGLF_dead1seed.y, 0., donor_replacementGLF_dead1seed.x / _GLF_IDENTITY(20., (20.) / 1.0)), 0., 1.);
       if(_GLF_DEAD(false))
        {
         _GLF_color = mat3x4(893.052, -0.5, 8446.4265, 2.0, 1.1, _GLF_IDENTITY(70.39, _GLF_IDENTITY(min(70.39, 70.39), max(min(70.39, 70.39), min(70.39, 70.39)))), -9012.3834, -75.64, 2415.4707, 3219.4076, 1.5, _GLF_IDENTITY(-3.1, clamp(-3.1, -3.1, -3.1)))[2];
        }
      }
     if(_GLF_DEAD(_GLF_FALSE(false, _GLF_IDENTITY((injectionSwitch.x > injectionSwitch.y), (false ? _GLF_FUZZED(false) : _GLF_IDENTITY((injectionSwitch.x > injectionSwitch.y), ! (! ((injectionSwitch.x > injectionSwitch.y)))))))))
      {
       {
        GLF_dead0radius += GLF_dead0radius;
       }
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      {
       _GLF_IDENTITY(_GLF_color = vec4(-235.092, 3978.7958, 8.7, -0.8), (_GLF_color = vec4(-235.092, 3978.7958, 8.7, -0.8)) - vec4(0.0, 0.0, 0.0, 0.0));
      }
     if(_GLF_DEAD(false))
      {
       _GLF_color = (vec4(2498.0332, 743.802, 9.2, -34.60) * -51.01);
      }
    }
   {
    vec2(fract(sin(dot(donor_replacementGLF_dead1seed.xy, vec2(12.9898, _GLF_IDENTITY(78.233, clamp(_GLF_IDENTITY(78.233, max(78.233, 78.233)), 78.233, _GLF_IDENTITY(78.233, max(78.233, 78.233))))))) * 43758.5453), _GLF_IDENTITY(fract(cos(dot(donor_replacementGLF_dead1seed.xy, vec2(4.898, 7.23))) * 23421.631), (true ? fract(cos(dot(donor_replacementGLF_dead1seed.xy, vec2(4.898, 7.23))) * 23421.631) : _GLF_FUZZED(GLF_dead6time))));
   }
  }
 return _GLF_IDENTITY(length(GLF_dead0pos - GLF_dead0cent) - _GLF_IDENTITY(GLF_dead0radius, clamp(_GLF_IDENTITY(GLF_dead0radius, clamp(GLF_dead0radius, _GLF_IDENTITY(GLF_dead0radius, 1.0 * (GLF_dead0radius)), GLF_dead0radius)), GLF_dead0radius, _GLF_IDENTITY(GLF_dead0radius, (GLF_dead0radius) * 1.0))), (length(GLF_dead0pos - GLF_dead0cent) - _GLF_IDENTITY(GLF_dead0radius, max(GLF_dead0radius, GLF_dead0radius))) - 0.0);
}
void main(void)
{
 if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord.x < 0.0, (true ? gl_FragCoord.x < 0.0 : _GLF_FUZZED((_GLF_IDENTITY(true, (true ? _GLF_IDENTITY(true, ! (! (_GLF_IDENTITY(true, (true) || false)))) : _GLF_FUZZED(true))) != false))))))))
  {
   if(_GLF_DEAD(false))
    {
     vec2 donor_replacementGLF_dead7b = _GLF_FUZZED(_GLF_IDENTITY(resolution, clamp(_GLF_IDENTITY(resolution, _GLF_IDENTITY((resolution) * vec2(1.0, 1.0), max((resolution) * vec2(1.0, 1.0), (resolution) * vec2(1.0, 1.0)))), resolution, resolution)));
     if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(injectionSwitch, max(injectionSwitch, injectionSwitch)).x > injectionSwitch.y))))
      {
       _GLF_color = vec4(822.631, 702.616, 0.3, 72.18);
      }
     float donor_replacementGLF_dead7c = _GLF_FUZZED((-930.528 / _GLF_IDENTITY(6.9, clamp(6.9, 6.9, 6.9))));
     if(_GLF_DEAD(false))
      {
       _GLF_IDENTITY(_GLF_color = vec4(361.867, -9.2, 47.33, 1.0), (_GLF_color = vec4(361.867, -9.2, 47.33, 1.0)) / vec4(1.0, 1.0, 1.0, 1.0));
      }
     if(_GLF_DEAD(false))
      {
       _GLF_IDENTITY(_GLF_color = vec4(435.281, -578.035, -389.780, 4715.1316), (_GLF_color = vec4(435.281, -578.035, -389.780, 4715.1316)) + vec4(0.0, 0.0, 0.0, _GLF_IDENTITY(0.0, _GLF_IDENTITY((0.0), _GLF_ONE(1.0, injectionSwitch.y) * ((0.0))) / 1.0)));
       if(_GLF_DEAD(false))
        {
         if(_GLF_DEAD(false))
          {
           _GLF_color = vec4(556.786, 6739.5108, -40.95, 228.109);
          }
         _GLF_color = vec4(-8.8, -2795.7276, 9.7, -8067.6640);
        }
      }
     float donor_replacementGLF_dead7p = _GLF_FUZZED(_GLF_IDENTITY(_GLF_IDENTITY(GLF_dead6time, (GLF_dead6time) / length(normalize(1.0))), min(_GLF_IDENTITY(GLF_dead6time, (true ? _GLF_IDENTITY(GLF_dead6time, clamp(GLF_dead6time, GLF_dead6time, GLF_dead6time)) : _GLF_FUZZED(0.4))), GLF_dead6time)));
     for(
         float GLF_dead7i = 16.0;
         _GLF_IDENTITY(GLF_dead7i, (_GLF_IDENTITY(GLF_dead7i, max(_GLF_IDENTITY(_GLF_IDENTITY(GLF_dead7i, clamp(GLF_dead7i, GLF_dead7i, _GLF_IDENTITY(GLF_dead7i, (GLF_dead7i) - _GLF_ZERO(0.0, injectionSwitch.x)))), max(GLF_dead7i, GLF_dead7i)), GLF_dead7i))) + _GLF_IDENTITY(0.0, max(_GLF_IDENTITY(0.0, min(0.0, 0.0)), 0.0))) >= 1.0;
         GLF_dead7i -= 1.0
     )
      {
       donor_replacementGLF_dead7p = pow(2.0, GLF_dead7i);
       if((donor_replacementGLF_dead7p < donor_replacementGLF_dead7b.x) ^^ (donor_replacementGLF_dead7p < _GLF_IDENTITY(donor_replacementGLF_dead7b.y, (_GLF_IDENTITY(donor_replacementGLF_dead7b, min(donor_replacementGLF_dead7b, donor_replacementGLF_dead7b)).y) - 0.0)))
        {
         donor_replacementGLF_dead7c += donor_replacementGLF_dead7p;
        }
       if(donor_replacementGLF_dead7p < _GLF_IDENTITY(donor_replacementGLF_dead7b.x, clamp(_GLF_IDENTITY(_GLF_IDENTITY(donor_replacementGLF_dead7b.x, max(donor_replacementGLF_dead7b.x, donor_replacementGLF_dead7b.x)), min(donor_replacementGLF_dead7b.x, donor_replacementGLF_dead7b.x)), _GLF_IDENTITY(donor_replacementGLF_dead7b.x, clamp(_GLF_IDENTITY(donor_replacementGLF_dead7b.x, (donor_replacementGLF_dead7b.x) - 0.0), _GLF_IDENTITY(donor_replacementGLF_dead7b.x, min(donor_replacementGLF_dead7b.x, donor_replacementGLF_dead7b.x)), donor_replacementGLF_dead7b.x)), _GLF_IDENTITY(donor_replacementGLF_dead7b.x, clamp(donor_replacementGLF_dead7b.x, _GLF_IDENTITY(donor_replacementGLF_dead7b, max(donor_replacementGLF_dead7b, donor_replacementGLF_dead7b)).x, donor_replacementGLF_dead7b.x)))))
        {
         donor_replacementGLF_dead7b.x -= _GLF_IDENTITY(donor_replacementGLF_dead7p, min(donor_replacementGLF_dead7p, _GLF_IDENTITY(donor_replacementGLF_dead7p, (false ? _GLF_FUZZED(_GLF_IDENTITY(time, 1.0 * (time))) : donor_replacementGLF_dead7p))));
        }
       if(_GLF_IDENTITY(_GLF_IDENTITY(donor_replacementGLF_dead7p < donor_replacementGLF_dead7b.y, (true ? donor_replacementGLF_dead7p < donor_replacementGLF_dead7b.y : _GLF_FUZZED(true))), (_GLF_IDENTITY(donor_replacementGLF_dead7p < donor_replacementGLF_dead7b.y, _GLF_IDENTITY(true, true && (true)) && (donor_replacementGLF_dead7p < donor_replacementGLF_dead7b.y))) && true))
        {
         donor_replacementGLF_dead7b.y -= donor_replacementGLF_dead7p;
        }
      }
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(24.38, 17.10, 5.7, -2.1);
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(_GLF_IDENTITY(-3.3, clamp(_GLF_IDENTITY(-3.3, (false ? _GLF_FUZZED(time) : _GLF_IDENTITY(-3.3, clamp(-3.3, -3.3, -3.3)))), -3.3, _GLF_IDENTITY(-3.3, max(-3.3, -3.3)))), 5212.2382, -4520.4641, 19.13);
    }
   vec2 donor_replacementGLF_dead0mouse = _GLF_FUZZED(injectionSwitch);
   if(_GLF_DEAD(false))
    {
     vec3 donor_replacementGLF_dead4a = _GLF_FUZZED(vec3(_GLF_IDENTITY(time, min(time, time))));
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(3068.4082, -2051.6062, 4517.4574, 6641.2381);
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(inversesqrt(-5743.5651), vec2(-6246.1595, 2849.2889), -2.5);
        }
      }
     vec3 donor_replacementGLF_dead4b = _GLF_FUZZED(vec3(_GLF_IDENTITY(-3.5, min(-3.5, _GLF_IDENTITY(-3.5, min(_GLF_IDENTITY(-3.5, (false ? _GLF_FUZZED(refract(GLF_dead6time, -183.545, 9.5)) : -3.5)), -3.5)))), -788.231, -3.0));
     vec3 donor_replacementGLF_dead4c = _GLF_FUZZED(vec3(1.0, 3.4, 197.134));
     vec3 donor_replacementGLF_dead4d = _GLF_FUZZED(vec3(refract(-6.3, -50.74, _GLF_IDENTITY(time, (time) / 1.0)), time, -7955.5167));
     if(_GLF_DEAD(false))
      {
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(-0.8, -9.6, 3.4, 7.9);
        }
       _GLF_color = vec4(7.9, -962.655, -9827.7091, -7738.0824);
      }
     float donor_replacementGLF_dead4t = _GLF_FUZZED(time);
     {
      if(_GLF_DEAD(false))
       {
        _GLF_color = (_GLF_IDENTITY((_GLF_IDENTITY(82.58, max(82.58, 82.58)) / vec3(-177.318, -170.022, -4.4)), ((_GLF_IDENTITY(82.58, max(82.58, 82.58)) / vec3(-177.318, -170.022, -4.4))) + vec3(0.0, 0.0, 0.0)) * mat4x3(_GLF_IDENTITY(-5.5, max(-5.5, -5.5)), 53.29, -108.292, 336.692, -89.40, 4.7, -2.8, -8.8, -8435.0362, -461.223, -6.0, 733.273));
       }
      if(_GLF_DEAD(false))
       {
        _GLF_color = _GLF_IDENTITY(exp2(vec4(-5660.9930, -591.413, 9.9, 6.9)), max(exp2(vec4(-5660.9930, -591.413, 9.9, 6.9)), exp2(vec4(-5660.9930, -591.413, 9.9, 6.9))));
       }
      donor_replacementGLF_dead4a + donor_replacementGLF_dead4b * cos(_GLF_IDENTITY(6.28318 * (donor_replacementGLF_dead4c * donor_replacementGLF_dead4t + donor_replacementGLF_dead4d), (_GLF_IDENTITY(6.28318 * (donor_replacementGLF_dead4c * donor_replacementGLF_dead4t + _GLF_IDENTITY(donor_replacementGLF_dead4d, clamp(_GLF_IDENTITY(donor_replacementGLF_dead4d, max(donor_replacementGLF_dead4d, _GLF_IDENTITY(donor_replacementGLF_dead4d, vec3(1.0, 1.0, 1.0) * (donor_replacementGLF_dead4d)))), _GLF_IDENTITY(donor_replacementGLF_dead4d, max(_GLF_IDENTITY(donor_replacementGLF_dead4d, max(donor_replacementGLF_dead4d, donor_replacementGLF_dead4d)), donor_replacementGLF_dead4d)), donor_replacementGLF_dead4d))), abs(vec3(1.0, 1.0, 1.0)) * (_GLF_IDENTITY(6.28318 * (donor_replacementGLF_dead4c * donor_replacementGLF_dead4t + donor_replacementGLF_dead4d), clamp(6.28318 * _GLF_IDENTITY((donor_replacementGLF_dead4c * donor_replacementGLF_dead4t + donor_replacementGLF_dead4d), min((donor_replacementGLF_dead4c * donor_replacementGLF_dead4t + donor_replacementGLF_dead4d), (donor_replacementGLF_dead4c * donor_replacementGLF_dead4t + donor_replacementGLF_dead4d))), 6.28318 * _GLF_IDENTITY((donor_replacementGLF_dead4c * donor_replacementGLF_dead4t + donor_replacementGLF_dead4d), ((_GLF_IDENTITY(donor_replacementGLF_dead4c, vec3(0.0, 0.0, 0.0) + (donor_replacementGLF_dead4c)) * donor_replacementGLF_dead4t + donor_replacementGLF_dead4d)) - log(vec3(1.0, 1.0, 1.0))), 6.28318 * (donor_replacementGLF_dead4c * donor_replacementGLF_dead4t + donor_replacementGLF_dead4d)))))) * vec3(1.0, 1.0, 1.0)));
     }
    }
   vec3 donor_replacementGLF_dead0pos = _GLF_FUZZED((+ vec3(4.3, 6.1, _GLF_IDENTITY(-988.018, (_GLF_IDENTITY(-988.018, max(-988.018, -988.018))) - 0.0))));
   {
    if(_GLF_DEAD(_GLF_IDENTITY(false, _GLF_IDENTITY(false || (false), ! (! (false || (false)))))))
     {
      if(_GLF_DEAD(false))
       {
        const float donor_replacementGLF_dead8RAY_STOP_TRESHOLD = _GLF_FUZZED(79.20);
        float donor_replacementGLF_dead8dist = _GLF_FUZZED(GLF_dead6time);
        int donor_replacementGLF_dead8i = _GLF_FUZZED(-9887);
        vec3 donor_replacementGLF_dead8rayDir = _GLF_FUZZED(round(vec3(_GLF_IDENTITY(-7.0, clamp(_GLF_IDENTITY(-7.0, (false ? _GLF_FUZZED(donor_replacementGLF_dead8dist) : -7.0)), _GLF_IDENTITY(-7.0, (-7.0) / 1.0), -7.0)), 392.960, 5485.2769)));
        vec3 donor_replacementGLF_dead8rayPos = _GLF_FUZZED(exp2(donor_replacementGLF_dead0pos));
        int donor_replacementGLF_dead8stepsTaken = _GLF_FUZZED(-10864);
        {
         if(donor_replacementGLF_dead8dist < donor_replacementGLF_dead8RAY_STOP_TRESHOLD)
          {
           ;
          }
         donor_replacementGLF_dead8rayPos += donor_replacementGLF_dead8rayDir * donor_replacementGLF_dead8dist;
         donor_replacementGLF_dead8dist = GLF_dead8scene(donor_replacementGLF_dead8rayPos);
         donor_replacementGLF_dead8stepsTaken = donor_replacementGLF_dead8i;
        }
       }
      if(_GLF_DEAD(_GLF_IDENTITY(_GLF_IDENTITY(false, (false ? _GLF_FUZZED(true) : false)), _GLF_TRUE(true, (injectionSwitch.x < _GLF_IDENTITY(_GLF_IDENTITY(injectionSwitch, vec2(0.0, 0.0) + (injectionSwitch)), (injectionSwitch) * vec2(1.0, 1.0)).y)) && (false))))
       {
        float donor_replacementGLF_dead3shadow = _GLF_FUZZED(abs(4.0));
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
          {
           _GLF_color = inversesqrt((step(1.9, vec4(425.521, _GLF_IDENTITY(35.54, clamp(35.54, 35.54, 35.54)), -666.423, -5.9)) - _GLF_IDENTITY(-9.3, clamp(-9.3, _GLF_IDENTITY(-9.3, min(-9.3, -9.3)), -9.3))));
          }
         donor_replacementGLF_dead3shadow = clamp(donor_replacementGLF_dead3shadow + mix(donor_replacementGLF_dead0mouse.y, 0., donor_replacementGLF_dead0mouse.x / 20.), 0., 1.);
        }
       }
      _GLF_color = step(_GLF_IDENTITY(3.6, (3.6) - 0.0), vec4(_GLF_IDENTITY(6.8, (_GLF_IDENTITY(6.8, (_GLF_IDENTITY(false, (true ? _GLF_IDENTITY(false, (false ? _GLF_FUZZED(true) : false)) : _GLF_FUZZED(false))) ? _GLF_FUZZED(1.6) : 6.8))) / 1.0), -5786.4073, _GLF_IDENTITY(-52.22, min(-52.22, -52.22)), -47.56));
     }
    vec3 GLF_dead0cent = _GLF_IDENTITY(vec3((_GLF_IDENTITY(donor_replacementGLF_dead0mouse - vec2(.5, 0.), clamp(donor_replacementGLF_dead0mouse - vec2(.5, 0.), donor_replacementGLF_dead0mouse - vec2(.5, 0.), donor_replacementGLF_dead0mouse - vec2(.5, 0.)))) * _GLF_IDENTITY(vec2(12., 3.), (vec2(12., 3.)) * length(normalize(vec2(1.0, 1.0)))), 0.), (_GLF_IDENTITY(vec3(_GLF_IDENTITY((donor_replacementGLF_dead0mouse - vec2(.5, 0.)) * vec2(12., 3.), clamp(_GLF_IDENTITY((donor_replacementGLF_dead0mouse - vec2(.5, 0.)) * vec2(12., 3.), ((donor_replacementGLF_dead0mouse - vec2(.5, 0.)) * vec2(12., 3.)) / vec2(1.0, 1.0)), (donor_replacementGLF_dead0mouse - vec2(.5, 0.)) * vec2(_GLF_IDENTITY(12., (true ? 12. : _GLF_FUZZED(length(GLF_dead6time)))), 3.), (_GLF_IDENTITY(donor_replacementGLF_dead0mouse - vec2(.5, 0.), (_GLF_IDENTITY(donor_replacementGLF_dead0mouse - vec2(.5, 0.), vec2(0.0, 0.0) + (_GLF_IDENTITY(donor_replacementGLF_dead0mouse, (donor_replacementGLF_dead0mouse) - sin(vec2(0.0, 0.0))) - vec2(.5, 0.)))) - length(vec2(0.0, 0.0)))) * vec2(12., 3.))), _GLF_IDENTITY(0., (0.) - 0.0)), max(vec3((donor_replacementGLF_dead0mouse - _GLF_IDENTITY(vec2(.5, 0.), max(_GLF_IDENTITY(vec2(.5, 0.), clamp(_GLF_IDENTITY(vec2(_GLF_IDENTITY(.5, (true ? .5 : _GLF_FUZZED(round(-832.099)))), 0.), min(vec2(.5, _GLF_IDENTITY(0., clamp(_GLF_IDENTITY(0., min(_GLF_IDENTITY(0., max(0., 0.)), _GLF_IDENTITY(0., (0.) / 1.0))), _GLF_IDENTITY(0., min(_GLF_IDENTITY(0., clamp(0., 0., 0.)), 0.)), 0.))), vec2(.5, 0.))), _GLF_IDENTITY(vec2(.5, 0.), (vec2(.5, 0.)) - vec2(0.0, 0.0)), vec2(.5, 0.))), vec2(.5, 0.)))) * vec2(12., _GLF_IDENTITY(3., (true ? _GLF_IDENTITY(3., 1.0 * (3.)) : _GLF_FUZZED(GLF_dead6time)))), 0.), vec3((_GLF_IDENTITY(donor_replacementGLF_dead0mouse, min(donor_replacementGLF_dead0mouse, donor_replacementGLF_dead0mouse)) - vec2(.5, 0.)) * vec2(_GLF_IDENTITY(12., max(12., _GLF_IDENTITY(12., (12.) + 0.0))), 3.), 0.)))) / vec3(1.0, 1.0, 1.0)) + vec3(0., 1.2, 7.);
    float GLF_dead0sphere = GLF_dead0dist_sphere(_GLF_IDENTITY(donor_replacementGLF_dead0pos, (donor_replacementGLF_dead0pos) * _GLF_IDENTITY(vec3(_GLF_IDENTITY(1.0, (1.0) / 1.0), 1.0, 1.0), vec3(0.0, 0.0, 0.0) + (vec3(1.0, 1.0, 1.0)))), GLF_dead0cent, _GLF_IDENTITY(1., clamp(1., 1., 1.)));
    GLF_dead0sphere;
    if(_GLF_DEAD(false))
     {
      vec3 donor_replacementGLF_dead3ro = _GLF_FUZZED(_GLF_IDENTITY(clamp(_GLF_IDENTITY(donor_replacementGLF_dead0pos, min(donor_replacementGLF_dead0pos, donor_replacementGLF_dead0pos)), -5.3, time), clamp(_GLF_IDENTITY(_GLF_IDENTITY(clamp(donor_replacementGLF_dead0pos, -5.3, time), (clamp(donor_replacementGLF_dead0pos, -5.3, time)) / vec3(1.0, 1.0, 1.0)), clamp(clamp(donor_replacementGLF_dead0pos, -5.3, time), clamp(_GLF_IDENTITY(donor_replacementGLF_dead0pos, (donor_replacementGLF_dead0pos) / vec3(1.0, 1.0, 1.0)), _GLF_IDENTITY(-5.3, (-5.3) + 0.0), time), clamp(donor_replacementGLF_dead0pos, -5.3, time))), clamp(donor_replacementGLF_dead0pos, -5.3, time), clamp(donor_replacementGLF_dead0pos, -5.3, time))));
      vec3 donor_replacementGLF_dead3ta = _GLF_FUZZED(intBitsToFloat(ivec3(-33159, -6720, 79319)));
      float donor_replacementGLF_dead3time = _GLF_FUZZED(_GLF_IDENTITY(mix(GLF_dead0sphere, GLF_dead0sphere, true), _GLF_IDENTITY((mix(GLF_dead0sphere, GLF_dead0sphere, true)) / 1.0, min((_GLF_IDENTITY(mix(GLF_dead0sphere, GLF_dead0sphere, true), min(mix(GLF_dead0sphere, GLF_dead0sphere, true), mix(GLF_dead0sphere, GLF_dead0sphere, true)))) / 1.0, (mix(GLF_dead0sphere, GLF_dead0sphere, true)) / 1.0))));
      {
       donor_replacementGLF_dead3ro = vec3(16.0 * cos(_GLF_IDENTITY(0.2, (0.2) * 1.0) + 0.5 * .4 * donor_replacementGLF_dead3time * _GLF_IDENTITY(1.5, (false ? _GLF_FUZZED(GLF_dead6time) : 1.5))) * 20., 5.6 + 3. * sin(donor_replacementGLF_dead3time), 16.0 * sin(0.1 + 0.5 * 0.11 * donor_replacementGLF_dead3time * _GLF_IDENTITY(1.5, min(1.5, 1.5))) * 20.);
       donor_replacementGLF_dead3time += 1.6;
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > _GLF_IDENTITY(injectionSwitch, (injectionSwitch) / exp(vec2(0.0, _GLF_IDENTITY(0.0, (_GLF_IDENTITY(0.0, min(0.0, _GLF_IDENTITY(0.0, min(0.0, 0.0))))) - 0.0)))).y))))
        {
         _GLF_color = _GLF_IDENTITY(vec3(4.7, -7.7, 6.0), min(vec3(4.7, -7.7, 6.0), vec3(4.7, -7.7, 6.0))).ssss;
        }
       donor_replacementGLF_dead3ta = vec3(16.0 * cos(0.2 + 0.5 * _GLF_IDENTITY(.4, clamp(_GLF_IDENTITY(.4, clamp(.4, .4, _GLF_IDENTITY(.4, max(.4, _GLF_IDENTITY(.4, max(.4, .4)))))), .4, .4)) * donor_replacementGLF_dead3time * 1.5) * 20., - .1 + _GLF_IDENTITY(2. * sin(donor_replacementGLF_dead3time), (true ? 2. * sin(_GLF_IDENTITY(donor_replacementGLF_dead3time, clamp(donor_replacementGLF_dead3time, donor_replacementGLF_dead3time, _GLF_IDENTITY(donor_replacementGLF_dead3time, (donor_replacementGLF_dead3time) * 1.0)))) : _GLF_FUZZED(-92.76))), 16.0 * sin(0.1 + 0.5 * 0.11 * donor_replacementGLF_dead3time * 1.5) * 20.);
      }
     }
   }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord.x < _GLF_IDENTITY(0.0, min(0.0, 0.0)), (_GLF_IDENTITY(gl_FragCoord.x < 0.0, (gl_FragCoord.x < 0.0) || _GLF_FALSE(false, (_GLF_IDENTITY(injectionSwitch.x > injectionSwitch.y, (injectionSwitch.x > injectionSwitch.y) && true))))) && true)))))
      {
       _GLF_color = (vec3(630.195, 3547.2908, -7002.8052) * mat4x3(-29.61, -906.787, 717.464, 399.580, -360.182, 6.5, 5886.3510, -7873.9865, -84.53, 8.6, -5.5, -8.8));
       if(_GLF_DEAD(false))
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          {
           _GLF_color = vec4(-7893.0855, 59.40, 73.73, -13.12);
          }
         _GLF_color = _GLF_IDENTITY(vec4(-0.1, 235.521, _GLF_IDENTITY(9006.6473, (true ? 9006.6473 : _GLF_FUZZED(89.55))), -91.59), (vec4(-0.1, 235.521, _GLF_IDENTITY(9006.6473, _GLF_IDENTITY((true ? 9006.6473 : _GLF_FUZZED(89.55)), (_GLF_TRUE(true, (gl_FragCoord.y >= 0.0)) ? (true ? 9006.6473 : _GLF_FUZZED(89.55)) : _GLF_FUZZED(2161.9765)))), _GLF_IDENTITY(-91.59, (-91.59) + 0.0))) + vec4(0.0, 0.0, 0.0, 0.0));
        }
      }
     _GLF_color = _GLF_IDENTITY(smoothstep(48.12, -3.3, vec4(_GLF_IDENTITY(-29.73, clamp(-29.73, -29.73, -29.73)), 2.4, -346.059, -1584.1381)), length(vec4(0.0, 0.0, 0.0, 0.0)) + (_GLF_IDENTITY(smoothstep(48.12, -3.3, vec4(_GLF_IDENTITY(-29.73, clamp(-29.73, -29.73, -29.73)), 2.4, -346.059, -1584.1381)), vec4(1.0, 1.0, 1.0, 1.0) * (smoothstep(48.12, -3.3, vec4(_GLF_IDENTITY(-29.73, clamp(-29.73, -29.73, -29.73)), 2.4, -346.059, -1584.1381))))));
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      {
       _GLF_color = trunc(mix(vec4(21.08, 1083.0586, 0.0, 7.4), vec4(8.8, 726.821, 68.57, 4.6), bvec4(true, false, true, false)));
      }
     if(_GLF_DEAD(false))
      {
       _GLF_IDENTITY(_GLF_color = vec4(5083.7656, -603.265, 95.41, 837.657), (_GLF_color = vec4(5083.7656, -603.265, 95.41, 837.657)) - tan(vec4(0.0, 0.0, 0.0, 0.0)));
      }
    }
  }
 vec2 pos = (_GLF_IDENTITY(gl_FragCoord, (gl_FragCoord) + log(vec4(1.0, 1.0, 1.0, 1.0))).xy / _GLF_IDENTITY(resolution.xy, clamp(_GLF_IDENTITY(resolution.xy, max(_GLF_IDENTITY(resolution.xy, clamp(resolution.xy, resolution.xy, resolution.xy)), resolution.xy)), _GLF_IDENTITY(resolution.xy, clamp(_GLF_IDENTITY(resolution.xy, min(resolution.xy, resolution.xy)), resolution.xy, resolution.xy)), resolution.xy))) + _GLF_IDENTITY(_GLF_IDENTITY(mouse, (mouse) / abs(vec2(1.0, 1.0))) / _GLF_IDENTITY(1.1, (1.1) / 1.0), vec2(_GLF_IDENTITY(1.0, (_GLF_IDENTITY(false ? _GLF_FUZZED(GLF_dead6time) : 1.0, (_GLF_IDENTITY(false ? _GLF_FUZZED(GLF_dead6time) : 1.0, (false ? _GLF_FUZZED(GLF_dead6time) : 1.0) * 1.0)) - 0.0))), 1.0) * (_GLF_IDENTITY(_GLF_IDENTITY(mouse, (mouse) / vec2(1.0, 1.0)), _GLF_IDENTITY(vec2(0.0, 0.0), max(vec2(0.0, _GLF_IDENTITY(0.0, (_GLF_IDENTITY(0.0, clamp(0.0, 0.0, 0.0))) * cos(0.0))), _GLF_IDENTITY(vec2(0.0, 0.0), vec2(1.0, 1.0) * (_GLF_IDENTITY(vec2(0.0, 0.0), (vec2(0.0, 0.0)) / vec2(1.0, 1.0)))))) + (mouse)) / _GLF_IDENTITY(1.1, clamp(_GLF_IDENTITY(1.1, min(1.1, 1.1)), 1.1, 1.1))));
 if(_GLF_DEAD(_GLF_FALSE(false, _GLF_IDENTITY((_GLF_IDENTITY(gl_FragCoord.y, (_GLF_IDENTITY(gl_FragCoord, min(gl_FragCoord, gl_FragCoord)).y) * 1.0) < abs(_GLF_IDENTITY(_GLF_IDENTITY(0.0, clamp(0.0, 0.0, _GLF_IDENTITY(0.0, (0.0) / 1.0))), (_GLF_FALSE(false, (_GLF_IDENTITY(injectionSwitch, max(_GLF_IDENTITY(injectionSwitch, max(injectionSwitch, injectionSwitch)), _GLF_IDENTITY(injectionSwitch, max(injectionSwitch, injectionSwitch)))).x > _GLF_IDENTITY(injectionSwitch.y, min(_GLF_IDENTITY(_GLF_IDENTITY(injectionSwitch, max(injectionSwitch, _GLF_IDENTITY(injectionSwitch, max(injectionSwitch, injectionSwitch)))).y, clamp(injectionSwitch.y, injectionSwitch.y, injectionSwitch.y)), _GLF_IDENTITY(injectionSwitch.y, (injectionSwitch.y) - _GLF_IDENTITY(0.0, (0.0) - 0.0)))))) ? _GLF_FUZZED(time) : 0.0)))), (true ? (_GLF_IDENTITY(_GLF_IDENTITY(gl_FragCoord, min(gl_FragCoord, gl_FragCoord)).y, (_GLF_IDENTITY(gl_FragCoord.y, clamp(_GLF_IDENTITY(gl_FragCoord.y, 0.0 + (gl_FragCoord.y)), gl_FragCoord.y, gl_FragCoord.y))) * 1.0) < abs(_GLF_IDENTITY(0.0, (_GLF_FALSE(false, (injectionSwitch.x > _GLF_IDENTITY(injectionSwitch.y, max(injectionSwitch.y, injectionSwitch.y)))) ? _GLF_FUZZED(time) : 0.0)))) : _GLF_FUZZED(true))))))
  {
   _GLF_color = vec4(_GLF_IDENTITY(1.2, (1.2) - 0.0), 733.503, _GLF_IDENTITY(-7329.0067, 0.0 + (-7329.0067)), _GLF_IDENTITY(_GLF_IDENTITY(6.2, max(6.2, _GLF_IDENTITY(6.2, (_GLF_TRUE(true, (gl_FragCoord.y >= 0.0)) ? 6.2 : _GLF_FUZZED(GLF_dead6time))))), (6.2) - _GLF_IDENTITY(tan(0.0), (false ? _GLF_FUZZED(684.852) : _GLF_IDENTITY(tan(0.0), (tan(0.0)) + 0.0)))));
   if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(injectionSwitch.x > injectionSwitch.y, (_GLF_IDENTITY(true, (true) && true) ? injectionSwitch.x > injectionSwitch.y : _GLF_FUZZED(true)))))))
    {
     _GLF_color = (mat2x4(0.5, _GLF_IDENTITY(_GLF_IDENTITY(5.3, min(5.3, _GLF_IDENTITY(5.3, clamp(5.3, 5.3, 5.3)))), clamp(_GLF_IDENTITY(5.3, (5.3) + 0.0), _GLF_IDENTITY(5.3, clamp(5.3, 5.3, _GLF_IDENTITY(5.3, (true ? 5.3 : _GLF_FUZZED(-46.38))))), _GLF_IDENTITY(5.3, 0.0 + (5.3)))), -8884.3676, 2.9, -468.751, _GLF_IDENTITY(-3804.8853, (-3804.8853) - 0.0), 1373.0972, 9.0) * (_GLF_IDENTITY(_GLF_IDENTITY(vec3(99.02, 605.065, _GLF_IDENTITY(130.909, (_GLF_FALSE(false, (gl_FragCoord.y < 0.0)) ? _GLF_FUZZED(GLF_dead6time) : 130.909))), (vec3(99.02, 605.065, _GLF_IDENTITY(130.909, (_GLF_FALSE(false, (gl_FragCoord.y < 0.0)) ? _GLF_FUZZED(GLF_dead6time) : 130.909)))) + vec3(0.0, 0.0, 0.0)).sstp * mat2x4(-4.7, _GLF_IDENTITY(-2014.7231, min(-2014.7231, -2014.7231)), -1.2, -717.369, -87.68, 1731.7109, 7222.7890, -3.4), max(_GLF_IDENTITY(vec3(99.02, 605.065, 130.909).sstp, max(vec3(99.02, 605.065, 130.909).sstp, _GLF_IDENTITY(vec3(99.02, 605.065, _GLF_IDENTITY(130.909, (130.909) - 0.0)).sstp, max(vec3(99.02, 605.065, 130.909).sstp, vec3(99.02, 605.065, 130.909).sstp)))) * mat2x4(-4.7, _GLF_IDENTITY(-2014.7231, (true ? -2014.7231 : _GLF_FUZZED(GLF_dead6time))), -1.2, -717.369, -87.68, 1731.7109, 7222.7890, -3.4), vec3(99.02, 605.065, 130.909).sstp * mat2x4(-4.7, -2014.7231, -1.2, -717.369, -87.68, 1731.7109, 7222.7890, -3.4)))));
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-0.3, -687.379, 2850.1547, -263.045);
    }
  }
 float x = fract(sin(pos.x) * _GLF_IDENTITY(9., 0.0 + (9.)) + _GLF_IDENTITY(sin(pos.x * 122. + 10.5), min(sin(pos.x * 122. + 10.5), _GLF_IDENTITY(sin(_GLF_IDENTITY(_GLF_IDENTITY(pos.x * 122., (pos.x * 122.) * 1.0), (_GLF_IDENTITY(_GLF_IDENTITY(pos, min(pos, pos)).x * 122., (true ? pos.x * 122. : _GLF_FUZZED(GLF_dead6time)))) / 1.0) + 10.5), max(_GLF_IDENTITY(sin(pos.x * _GLF_IDENTITY(122., (_GLF_IDENTITY(122., _GLF_IDENTITY((122.) / 1.0, (_GLF_TRUE(true, (gl_FragCoord.x >= 0.0)) ? _GLF_IDENTITY((122.) / 1.0, (true ? (122.) / 1.0 : _GLF_FUZZED(time))) : _GLF_FUZZED(time))))) * exp(0.0)) + 10.5), 1.0 * (sin(_GLF_IDENTITY(pos.x * 122. + 10.5, max(pos.x * 122. + 10.5, _GLF_IDENTITY(pos.x * _GLF_IDENTITY(122., (_GLF_IDENTITY(122., clamp(122., 122., 122.))) + 0.0) + 10.5, (true ? pos.x * 122. + 10.5 : _GLF_FUZZED(-646.488)))))))), sin(pos.x * 122. + 10.5))))) * _GLF_IDENTITY(3., max(3., _GLF_IDENTITY(3., (_GLF_IDENTITY(3., 0.0 + (3.))) + _GLF_IDENTITY(0.0, (0.0) * 1.0)))) + sin(pos.x * _GLF_IDENTITY(100., (_GLF_IDENTITY(false, ! (! (_GLF_IDENTITY(_GLF_IDENTITY(false, (_GLF_IDENTITY(false, false || (false))) && true), _GLF_TRUE(true, (gl_FragCoord.x >= 0.0)) && (false))))) ? _GLF_FUZZED(5440.4632) : 100.)) + 0.2) * 99.);
 if(_GLF_DEAD(false))
  {
   mediump vec4 donor_replacementGLF_dead5gl_FragColor = _GLF_FUZZED(clamp(_GLF_IDENTITY(vec4(_GLF_IDENTITY(204.464, min(_GLF_IDENTITY(204.464, min(204.464, 204.464)), _GLF_IDENTITY(204.464, max(204.464, _GLF_IDENTITY(204.464, clamp(204.464, 204.464, _GLF_IDENTITY(204.464, min(_GLF_IDENTITY(204.464, (204.464) * 1.0), 204.464)))))))), 6427.5602, -9.5, 2.1), vec4(_GLF_IDENTITY(0.0, clamp(0.0, _GLF_IDENTITY(0.0, (0.0) - 0.0), 0.0)), 0.0, _GLF_IDENTITY(0.0, clamp(0.0, 0.0, 0.0)), 0.0) + (vec4(_GLF_IDENTITY(204.464, min(204.464, _GLF_IDENTITY(_GLF_IDENTITY(204.464, min(204.464, _GLF_IDENTITY(204.464, max(_GLF_IDENTITY(204.464, clamp(204.464, 204.464, 204.464)), 204.464)))), max(204.464, _GLF_IDENTITY(204.464, clamp(204.464, 204.464, _GLF_IDENTITY(204.464, (204.464) * _GLF_IDENTITY(length(normalize(1.0)), (true ? length(normalize(1.0)) : _GLF_FUZZED(x)))))))))), _GLF_IDENTITY(6427.5602, (_GLF_IDENTITY(6427.5602, min(6427.5602, 6427.5602))) - 0.0), _GLF_IDENTITY(_GLF_IDENTITY(-9.5, max(-9.5, -9.5)), (_GLF_IDENTITY(-9.5, max(-9.5, _GLF_IDENTITY(-9.5, max(-9.5, -9.5))))) / 1.0), 2.1))), _GLF_color, _GLF_color));
   mediump vec4 donor_replacementGLF_dead5gl_FragCoord = _GLF_FUZZED(_GLF_color);
   if(_GLF_DEAD(false))
    {
     _GLF_color = min(vec4(-56.94, 90.29, 8.9, -8894.6241), mix(-2578.5396, 96.49, true));
    }
   vec2 donor_replacementGLF_dead5resolution = _GLF_FUZZED(_GLF_IDENTITY(resolution, max(resolution, _GLF_IDENTITY(_GLF_IDENTITY(resolution, (_GLF_IDENTITY(resolution, min(resolution, resolution))) * _GLF_IDENTITY(vec2(1.0, 1.0), _GLF_IDENTITY((vec2(1.0, 1.0)) - vec2(0.0, 0.0), max((vec2(1.0, _GLF_IDENTITY(1.0, min(1.0, 1.0)))) - vec2(0.0, 0.0), _GLF_IDENTITY((vec2(1.0, 1.0)) - vec2(0.0, 0.0), clamp((vec2(1.0, 1.0)) - vec2(0.0, 0.0), (vec2(1.0, 1.0)) - vec2(0.0, _GLF_IDENTITY(0.0, max(_GLF_IDENTITY(0.0, (0.0) * 1.0), _GLF_IDENTITY(0.0, min(0.0, 0.0))))), (vec2(1.0, 1.0)) - vec2(0.0, 0.0))))))), max(resolution, resolution)))));
   {
    vec3 GLF_dead5color;
    float GLF_dead5len;
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < length(0.0)))))
     {
      _GLF_color = vec4(521.419, -233.488, -86.35, 9170.9508);
     }
    float GLF_dead5t = time;
    vec2 GLF_dead5uv = _GLF_IDENTITY(donor_replacementGLF_dead5gl_FragCoord.xy / donor_replacementGLF_dead5resolution, vec2(1.0, 1.0) * (_GLF_IDENTITY(donor_replacementGLF_dead5gl_FragCoord.xy / donor_replacementGLF_dead5resolution, max(donor_replacementGLF_dead5gl_FragCoord.xy / donor_replacementGLF_dead5resolution, donor_replacementGLF_dead5gl_FragCoord.xy / donor_replacementGLF_dead5resolution))));
    vec2 GLF_dead5offset = _GLF_IDENTITY(GLF_dead5uv, (_GLF_IDENTITY(GLF_dead5uv, (GLF_dead5uv) * vec2(1.0, 1.0))) / length(normalize(vec2(1.0, 1.0))));
    GLF_dead5offset -= .5;
    GLF_dead5offset.x *= _GLF_IDENTITY(donor_replacementGLF_dead5resolution, max(donor_replacementGLF_dead5resolution, donor_replacementGLF_dead5resolution)).x / donor_replacementGLF_dead5resolution.y;
    GLF_dead5len = _GLF_IDENTITY(length(GLF_dead5offset), clamp(length(_GLF_IDENTITY(GLF_dead5offset, min(GLF_dead5offset, GLF_dead5offset))), length(GLF_dead5offset), length(GLF_dead5offset)));
    GLF_dead5t += 0.07;
    vec2 GLF_dead5offset_unit_vector = GLF_dead5offset / GLF_dead5len;
    float GLF_dead5firstMod = sin(_GLF_IDENTITY(GLF_dead5t, min(_GLF_IDENTITY(GLF_dead5t, clamp(_GLF_IDENTITY(GLF_dead5t, min(_GLF_IDENTITY(GLF_dead5t, _GLF_IDENTITY(1.0 * (GLF_dead5t), min(1.0 * (GLF_dead5t), _GLF_IDENTITY(1.0 * (GLF_dead5t), (true ? _GLF_IDENTITY(1.0 * (GLF_dead5t), max(1.0 * (GLF_dead5t), 1.0 * (GLF_dead5t))) : _GLF_FUZZED(1910.0242)))))), _GLF_IDENTITY(GLF_dead5t, min(GLF_dead5t, GLF_dead5t)))), GLF_dead5t, GLF_dead5t)), _GLF_IDENTITY(_GLF_IDENTITY(GLF_dead5t, max(GLF_dead5t, GLF_dead5t)), max(GLF_dead5t, GLF_dead5t))))) + 1.0;
    float GLF_dead5secondMod = abs(sin(GLF_dead5len * _GLF_IDENTITY(9.0, (false ? _GLF_FUZZED(GLF_dead5len) : _GLF_IDENTITY(9.0, (false ? _GLF_FUZZED(GLF_dead5t) : _GLF_IDENTITY(9.0, min(_GLF_IDENTITY(9.0, clamp(9.0, 9.0, _GLF_IDENTITY(9.0, max(_GLF_IDENTITY(9.0, (9.0) + 0.0), 9.0)))), 9.0)))))) - GLF_dead5t * 2.0));
    if(_GLF_DEAD(false))
     {
      float donor_replacementGLF_dead7c = _GLF_FUZZED(GLF_dead5uv[1]);
      float donor_replacementGLF_dead7p = _GLF_FUZZED(GLF_dead5secondMod);
      for(
          float GLF_dead7i = 16.0;
          GLF_dead7i >= 1.0;
          GLF_dead7i -= 1.0
      )
       {
        if(_GLF_DEAD(false))
         {
          _GLF_color = uintBitsToFloat(_GLF_IDENTITY(uvec4(143577u, 163884u, 55873u, 179752u), max(uvec4(143577u, 163884u, 55873u, 179752u), uvec4(143577u, 163884u, 55873u, 179752u))));
         }
        donor_replacementGLF_dead7p = pow(2.0, GLF_dead7i);
        if((donor_replacementGLF_dead7p < _GLF_IDENTITY(GLF_dead5uv.x, (GLF_dead5uv.x) - 0.0)) ^^ (_GLF_IDENTITY(donor_replacementGLF_dead7p < GLF_dead5uv.y, (_GLF_IDENTITY(false, true && (false)) ? _GLF_FUZZED((mat2(-9170.0904, -808.945, _GLF_IDENTITY(4170.3196, max(4170.3196, 4170.3196)), 6.3) == mat2(-24.25, _GLF_IDENTITY(65.97, max(_GLF_IDENTITY(65.97, min(65.97, 65.97)), 65.97)), 4057.2327, 1501.4175))) : donor_replacementGLF_dead7p < _GLF_IDENTITY(GLF_dead5uv, (GLF_dead5uv) + vec2(0.0, 0.0)).y))))
         {
          if(_GLF_DEAD(false))
           {
            _GLF_color = vec4(-5.1, _GLF_IDENTITY(5.2, (_GLF_IDENTITY(5.2, (5.2) / 1.0)) - 0.0), -4042.1445, -7.3);
           }
          if(_GLF_DEAD(false))
           {
            _GLF_color = vec4(81.40, 828.877, 98.43, -3.2);
           }
          _GLF_IDENTITY(_GLF_IDENTITY(donor_replacementGLF_dead7c += donor_replacementGLF_dead7p, (donor_replacementGLF_dead7c += donor_replacementGLF_dead7p) / length(normalize(1.0))), (donor_replacementGLF_dead7c += donor_replacementGLF_dead7p) / 1.0);
         }
        if(_GLF_IDENTITY(donor_replacementGLF_dead7p < _GLF_IDENTITY(GLF_dead5uv, (GLF_dead5uv) - vec2(0.0, 0.0)).x, (_GLF_IDENTITY(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y)) ? donor_replacementGLF_dead7p < _GLF_IDENTITY(_GLF_IDENTITY(GLF_dead5uv, (_GLF_IDENTITY(GLF_dead5uv, max(GLF_dead5uv, GLF_dead5uv))) / vec2(1.0, 1.0)).x, max(GLF_dead5uv.x, _GLF_IDENTITY(GLF_dead5uv.x, clamp(_GLF_IDENTITY(GLF_dead5uv, max(_GLF_IDENTITY(GLF_dead5uv, vec2(0.0, 0.0) + (GLF_dead5uv)), GLF_dead5uv)).x, GLF_dead5uv.x, GLF_dead5uv.x)))) : _GLF_FUZZED((true ? true : true)), false || (_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y)) ? donor_replacementGLF_dead7p < _GLF_IDENTITY(GLF_dead5uv.x, max(_GLF_IDENTITY(GLF_dead5uv, min(GLF_dead5uv, GLF_dead5uv)).x, _GLF_IDENTITY(GLF_dead5uv.x, _GLF_IDENTITY(clamp(GLF_dead5uv.x, GLF_dead5uv.x, GLF_dead5uv.x), (clamp(GLF_dead5uv.x, GLF_dead5uv.x, GLF_dead5uv.x)) / 1.0)))) : _GLF_FUZZED((true ? true : true)))))))
         {
          GLF_dead5uv.x -= donor_replacementGLF_dead7p;
         }
        if(donor_replacementGLF_dead7p < _GLF_IDENTITY(GLF_dead5uv, clamp(GLF_dead5uv, GLF_dead5uv, GLF_dead5uv)).y)
         {
          GLF_dead5uv.y -= donor_replacementGLF_dead7p;
         }
       }
     }
    GLF_dead5uv += _GLF_IDENTITY(GLF_dead5offset_unit_vector * GLF_dead5firstMod, min(GLF_dead5offset_unit_vector * GLF_dead5firstMod, GLF_dead5offset_unit_vector * GLF_dead5firstMod)) * GLF_dead5secondMod + injectionSwitch * 2.;
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(-91.84, -7.5, -24.15, 7.4);
     }
    GLF_dead5color[0] = .01 / length(_GLF_IDENTITY(abs(fract(GLF_dead5uv) - .5), vec2(0.0, 0.0) + (abs(fract(GLF_dead5uv) - .5))));
    GLF_dead5offset.x *= _GLF_IDENTITY(_GLF_IDENTITY(donor_replacementGLF_dead5resolution, (donor_replacementGLF_dead5resolution) - vec2(0.0, 0.0)), (_GLF_IDENTITY(donor_replacementGLF_dead5resolution, clamp(donor_replacementGLF_dead5resolution, donor_replacementGLF_dead5resolution, donor_replacementGLF_dead5resolution))) / vec2(1.0, 1.0)).x / _GLF_IDENTITY(donor_replacementGLF_dead5resolution.y, min(donor_replacementGLF_dead5resolution.y, _GLF_IDENTITY(donor_replacementGLF_dead5resolution.y, max(donor_replacementGLF_dead5resolution.y, donor_replacementGLF_dead5resolution.y))));
    _GLF_IDENTITY(GLF_dead5len = length(GLF_dead5offset), (true ? GLF_dead5len = length(_GLF_IDENTITY(GLF_dead5offset, vec2(0.0, 0.0) + (GLF_dead5offset))) : _GLF_FUZZED(3586.9285)));
    GLF_dead5t += 0.07;
    GLF_dead5offset_unit_vector = GLF_dead5offset / GLF_dead5len;
    GLF_dead5firstMod = sin(GLF_dead5t) + _GLF_IDENTITY(1.0, (_GLF_IDENTITY(true ? 1.0 : _GLF_FUZZED(time), (_GLF_IDENTITY(true ? 1.0 : _GLF_FUZZED(time), (_GLF_IDENTITY(true ? 1.0 : _GLF_FUZZED(time), (false ? _GLF_FUZZED(GLF_dead5secondMod) : true ? 1.0 : _GLF_FUZZED(time)))) / 1.0)) - _GLF_ZERO(0.0, injectionSwitch.x))));
    GLF_dead5secondMod = abs(sin(GLF_dead5len * _GLF_IDENTITY(9.0, 1.0 * (_GLF_IDENTITY(9.0, clamp(9.0, 9.0, 9.0)))) - GLF_dead5t * 2.0));
    _GLF_IDENTITY(GLF_dead5uv += GLF_dead5offset_unit_vector * GLF_dead5firstMod * GLF_dead5secondMod + injectionSwitch * 2., vec2(_GLF_IDENTITY(1.0, 1.0 * _GLF_IDENTITY((1.0), log(abs(1.0)) + ((1.0)))), 1.0) * (_GLF_IDENTITY(GLF_dead5uv += GLF_dead5offset_unit_vector * GLF_dead5firstMod * GLF_dead5secondMod + injectionSwitch * 2., (_GLF_IDENTITY(GLF_dead5uv += GLF_dead5offset_unit_vector * GLF_dead5firstMod * GLF_dead5secondMod + injectionSwitch * 2., (GLF_dead5uv += GLF_dead5offset_unit_vector * GLF_dead5firstMod * GLF_dead5secondMod + injectionSwitch * 2.) / vec2(1.0, 1.0))) - vec2(0.0, 0.0))));
    GLF_dead5color[1] = .01 / length(abs(fract(GLF_dead5uv) - _GLF_IDENTITY(_GLF_IDENTITY(.5, (_GLF_FALSE(false, (gl_FragCoord.x < 0.0)) ? _GLF_FUZZED(time) : .5)), (_GLF_IDENTITY(.5, min(.5, _GLF_IDENTITY(.5, min(.5, _GLF_IDENTITY(.5, (.5) / 1.0)))))) - 0.0)));
    donor_replacementGLF_dead5gl_FragColor = vec4(_GLF_IDENTITY(GLF_dead5color / .1, (GLF_dead5color / .1) / abs(vec3(1.0, 1.0, 1.0))), _GLF_IDENTITY(time, (time) * 1.0));
   }
   if(_GLF_DEAD(false))
    {
     _GLF_IDENTITY(_GLF_color = vec4(-8.8, _GLF_IDENTITY(37.17, 1.0 * (37.17)), 885.635, -65.40), (_GLF_IDENTITY(_GLF_color = vec4(-8.8, 37.17, 885.635, -65.40), vec4(0.0, 0.0, 0.0, 0.0) + (_GLF_color = vec4(-8.8, 37.17, 885.635, -65.40)))) - vec4(0.0, 0.0, 0.0, 0.0));
    }
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
     {
      if(_GLF_DEAD(false))
       {
        _GLF_color = vec4(1.0, -3.4, 2.2, 0.4);
       }
      pos.x -= _GLF_IDENTITY(x, (_GLF_IDENTITY(x, max(x, _GLF_IDENTITY(x, (false ? _GLF_FUZZED(GLF_dead6time) : x))))) / 1.0);
      if(_GLF_DEAD(false))
       {
        _GLF_color = vec4(8.9, -0.4, -14.78, 1.0);
       }
     }
    }
   _GLF_IDENTITY(_GLF_color = vec4(-1.1, 998.910, 6.6, 5.9), sqrt(vec4(0.0, 0.0, 0.0, 0.0)) + (_GLF_color = vec4(-1.1, _GLF_IDENTITY(998.910, (false ? _GLF_FUZZED(time) : 998.910)), _GLF_IDENTITY(6.6, (false ? _GLF_FUZZED(roundEven(GLF_dead6time)) : 6.6)), 5.9)));
  }
 float y = sin(pos.y) * 15. + sin(_GLF_IDENTITY(pos, _GLF_IDENTITY((pos), max((pos), (pos))) - vec2(0.0, 0.0)).x * _GLF_IDENTITY(22., max(_GLF_IDENTITY(22., (true ? _GLF_IDENTITY(22., 0.0 + (22.)) : _GLF_FUZZED(GLF_dead6time))), 22.)) + _GLF_IDENTITY(time, _GLF_IDENTITY((time) + 0.0, min((time) + 0.0, (time) + 0.0)))) * _GLF_IDENTITY(0.5, max(0.5, 0.5)) + sin(_GLF_IDENTITY(pos.x * 8., (pos.x * _GLF_IDENTITY(8., max(_GLF_IDENTITY(8., _GLF_ONE(1.0, injectionSwitch.y) * (8.)), 8.))) + 0.0) + 0.2) * _GLF_IDENTITY(2., min(2., _GLF_IDENTITY(2., min(2., 2.))));
 float r = fract(_GLF_IDENTITY(y + sin(pos.x + time), clamp(_GLF_IDENTITY(y + sin(pos.x + time), max(y + sin(pos.x + time), y + sin(pos.x + time))), y + sin(pos.x + time), _GLF_IDENTITY(y + sin(pos.x + time), (true ? y + sin(pos.x + time) : _GLF_FUZZED(mix(y, x, -9979.2394)))))));
 if(_GLF_DEAD(false))
  {
   _GLF_color = (64.98 * vec4(-824.617, -221.098, _GLF_IDENTITY(-3.6, 0.0 + (-3.6)), -95.47));
  }
 if(_GLF_DEAD(false))
  {
   mediump vec4 donor_replacementGLF_dead2gl_FragColor = _GLF_FUZZED(max(_GLF_IDENTITY(_GLF_IDENTITY((cos(_GLF_color) - _GLF_IDENTITY(y, (_GLF_IDENTITY(y, (y) + 0.0)) - sin(0.0))), clamp(_GLF_IDENTITY((cos(_GLF_color) - y), _GLF_IDENTITY(vec4(0.0, 0.0, 0.0, 0.0), min(vec4(0.0, 0.0, 0.0, 0.0), vec4(0.0, 0.0, 0.0, 0.0))) + ((cos(_GLF_color) - y))), (cos(_GLF_IDENTITY(_GLF_color, clamp(_GLF_color, _GLF_color, _GLF_color))) - y), (cos(_GLF_color) - y))), (_GLF_IDENTITY((cos(_GLF_IDENTITY(_GLF_color, (_GLF_IDENTITY(_GLF_color, clamp(_GLF_color, _GLF_color, _GLF_color))) / vec4(1.0, 1.0, 1.0, 1.0))) - y), _GLF_IDENTITY(_GLF_IDENTITY(((_GLF_IDENTITY(cos(_GLF_color) - y, (cos(_GLF_color) - y) + length(vec4(0.0, 0.0, 0.0, 0.0))))), vec4(1.0, 1.0, 1.0, 1.0) * (_GLF_IDENTITY(((_GLF_IDENTITY(cos(_GLF_color) - y, (cos(_GLF_color) - y) + length(vec4(0.0, 0.0, 0.0, 0.0))))), (_GLF_IDENTITY(((_GLF_IDENTITY(cos(_GLF_color) - y, (cos(_GLF_color) - y) + length(vec4(0.0, 0.0, 0.0, 0.0))))), (((_GLF_IDENTITY(cos(_GLF_color) - y, (cos(_GLF_color) - y) + length(vec4(0.0, 0.0, 0.0, 0.0)))))) / vec4(1.0, 1.0, 1.0, 1.0))) / vec4(1.0, 1.0, 1.0, 1.0)))), (((cos(_GLF_color) - y))) - vec4(_GLF_ZERO(0.0, injectionSwitch.x), _GLF_ZERO(0.0, injectionSwitch.x), _GLF_ZERO(0.0, injectionSwitch.x), _GLF_ZERO(0.0, injectionSwitch.x))) - vec4(_GLF_IDENTITY(0.0, (false ? _GLF_FUZZED(trunc(y)) : 0.0)), 0.0, _GLF_IDENTITY(0.0, (false ? _GLF_FUZZED(uintBitsToFloat((43441u | 36873u))) : _GLF_IDENTITY(0.0, max(0.0, 0.0)))), 0.0))) - vec4(0.0, 0.0, 0.0, 0.0)), mix(r, time, _GLF_IDENTITY(_GLF_IDENTITY(r, max(r, r)), clamp(r, r, _GLF_IDENTITY(r, clamp(r, r, r)))))));
   mediump vec4 donor_replacementGLF_dead2gl_FragCoord = _GLF_FUZZED(log(max(_GLF_color, vec4(-1.7, -9.8, 104.793, -13.60))));
   float donor_replacementGLF_dead2time = _GLF_FUZZED(r);
   {
    if(_GLF_DEAD(false))
     {
      _GLF_color = (3373.8154 + vec4(38.46, -0.3, 563.870, -2341.7482));
     }
    vec2 GLF_dead2pos = (_GLF_IDENTITY(donor_replacementGLF_dead2gl_FragCoord.xy, min(_GLF_IDENTITY(donor_replacementGLF_dead2gl_FragCoord.xy, clamp(donor_replacementGLF_dead2gl_FragCoord.xy, _GLF_IDENTITY(donor_replacementGLF_dead2gl_FragCoord.xy, min(_GLF_IDENTITY(donor_replacementGLF_dead2gl_FragCoord.xy, vec2(1.0, 1.0) * (donor_replacementGLF_dead2gl_FragCoord.xy)), _GLF_IDENTITY(donor_replacementGLF_dead2gl_FragCoord.xy, (_GLF_IDENTITY(donor_replacementGLF_dead2gl_FragCoord.xy, max(donor_replacementGLF_dead2gl_FragCoord.xy, donor_replacementGLF_dead2gl_FragCoord.xy))) / vec2(1.0, 1.0)))), donor_replacementGLF_dead2gl_FragCoord.xy)), _GLF_IDENTITY(donor_replacementGLF_dead2gl_FragCoord.xy, max(donor_replacementGLF_dead2gl_FragCoord.xy, _GLF_IDENTITY(donor_replacementGLF_dead2gl_FragCoord, min(_GLF_IDENTITY(donor_replacementGLF_dead2gl_FragCoord, min(donor_replacementGLF_dead2gl_FragCoord, donor_replacementGLF_dead2gl_FragCoord)), donor_replacementGLF_dead2gl_FragCoord)).xy)))) / _GLF_IDENTITY(injectionSwitch.xy, max(injectionSwitch.xy, injectionSwitch.xy))) + resolution / 1.1;
    float GLF_dead2x = fract(sin(_GLF_IDENTITY(GLF_dead2pos.x, (_GLF_IDENTITY(GLF_dead2pos.x, min(GLF_dead2pos.x, GLF_dead2pos.x))) / 1.0)) * 9. + sin(_GLF_IDENTITY(GLF_dead2pos, min(GLF_dead2pos, _GLF_IDENTITY(GLF_dead2pos, (GLF_dead2pos) - vec2(0.0, 0.0)))).x * 122. + 10.5) * _GLF_IDENTITY(3., (_GLF_IDENTITY(3., min(3., _GLF_IDENTITY(3., (_GLF_IDENTITY(3., min(3., 3.))) + 0.0)))) - 0.0) + sin(GLF_dead2pos.x * _GLF_IDENTITY(100., (100.) / sqrt(1.0)) + 0.2) * _GLF_IDENTITY(99., min(99., 99.)));
    if(_GLF_DEAD(false))
     {
      _GLF_color = normalize(vec4(395.399, -7.2, 0.4, 6850.8706));
     }
    float GLF_dead2y = _GLF_IDENTITY(sin(_GLF_IDENTITY(GLF_dead2pos, (GLF_dead2pos) * vec2(_GLF_IDENTITY(1.0, clamp(1.0, 1.0, 1.0)), 1.0)).y) * _GLF_IDENTITY(_GLF_IDENTITY(15., clamp(15., 15., _GLF_IDENTITY(15., (15.) - 0.0))), (15.) / 1.0), _GLF_IDENTITY(max(sin(_GLF_IDENTITY(GLF_dead2pos, vec2(_GLF_IDENTITY(1.0, min(1.0, 1.0)), 1.0) * (GLF_dead2pos)).y) * 15., sin(GLF_dead2pos.y) * 15.), clamp(max(sin(GLF_dead2pos.y) * 15., sin(GLF_dead2pos.y) * 15.), max(_GLF_IDENTITY(sin(_GLF_IDENTITY(GLF_dead2pos, min(GLF_dead2pos, GLF_dead2pos)).y) * 15., (true ? _GLF_IDENTITY(sin(GLF_dead2pos.y) * 15., (true ? sin(GLF_dead2pos.y) * 15. : _GLF_FUZZED(donor_replacementGLF_dead2time))) : _GLF_FUZZED(clamp(y, time, _GLF_IDENTITY(y, (true ? y : _GLF_FUZZED((+ 84.55)))))))), _GLF_IDENTITY(sin(GLF_dead2pos.y), clamp(sin(GLF_dead2pos.y), _GLF_IDENTITY(sin(GLF_dead2pos.y), _GLF_IDENTITY(min(sin(GLF_dead2pos.y), sin(GLF_dead2pos.y)), (false ? _GLF_FUZZED(51.32) : _GLF_IDENTITY(min(sin(GLF_dead2pos.y), sin(GLF_dead2pos.y)), (min(_GLF_IDENTITY(sin(GLF_dead2pos.y), max(_GLF_IDENTITY(sin(GLF_dead2pos.y), min(sin(GLF_dead2pos.y), sin(GLF_dead2pos.y))), _GLF_IDENTITY(sin(GLF_dead2pos.y), (true ? sin(GLF_dead2pos.y) : _GLF_FUZZED(x))))), sin(GLF_dead2pos.y))) / 1.0)))), sin(GLF_dead2pos.y))) * 15.), _GLF_IDENTITY(max(sin(GLF_dead2pos.y) * 15., _GLF_IDENTITY(sin(GLF_dead2pos.y), (_GLF_IDENTITY(sin(GLF_dead2pos.y), (sin(_GLF_IDENTITY(GLF_dead2pos.y, (GLF_dead2pos.y) / 1.0))) - 0.0)) / 1.0) * 15.), (max(_GLF_IDENTITY(sin(GLF_dead2pos.y) * 15., (sin(GLF_dead2pos.y) * 15.) / 1.0), sin(_GLF_IDENTITY(GLF_dead2pos, min(GLF_dead2pos, GLF_dead2pos)).y) * 15.)) / 1.0)))) + sin(GLF_dead2pos.x * _GLF_IDENTITY(22., (22.) + log(exp(0.0))) + _GLF_IDENTITY(donor_replacementGLF_dead2time, _GLF_IDENTITY(abs(length(_GLF_IDENTITY(normalize(1.0), (false ? _GLF_FUZZED(r) : normalize(1.0))))), (abs(length(normalize(1.0)))) * 1.0) * (donor_replacementGLF_dead2time))) * 0.5 + sin(_GLF_IDENTITY(_GLF_IDENTITY(GLF_dead2pos.x * 8., (_GLF_IDENTITY(GLF_dead2pos.x * 8., min(GLF_dead2pos.x * 8., GLF_dead2pos.x * 8.))) - 0.0) + 0.2, (_GLF_IDENTITY(GLF_dead2pos.x * 8. + 0.2, _GLF_IDENTITY(0.0, min(0.0, 0.0)) + (_GLF_IDENTITY(GLF_dead2pos.x * _GLF_IDENTITY(8., clamp(8., 8., 8.)) + 0.2, min(_GLF_IDENTITY(GLF_dead2pos, max(GLF_dead2pos, GLF_dead2pos)).x * _GLF_IDENTITY(8., (8.) / 1.0) + 0.2, GLF_dead2pos.x * 8. + 0.2))))) + 0.0)) * 2.;
    if(_GLF_DEAD(false))
     {
      _GLF_color = (_GLF_IDENTITY(vec4(9595.1972, _GLF_IDENTITY(-0.5, (false ? _GLF_FUZZED(donor_replacementGLF_dead2time) : -0.5)), -6.3, -19.90) * vec4(2402.5396, 20.34, -81.30, -303.110), (vec4(9595.1972, _GLF_IDENTITY(-0.5, (false ? _GLF_FUZZED(donor_replacementGLF_dead2time) : -0.5)), -6.3, -19.90) * vec4(2402.5396, 20.34, -81.30, -303.110)) + vec4(0.0, 0.0, 0.0, 0.0)));
     }
    if(_GLF_DEAD(false))
     {
      _GLF_color = (_GLF_IDENTITY(vec4(22.69, 848.971, 363.321, -875.743) + 3565.5196, clamp(vec4(22.69, 848.971, 363.321, -875.743) + 3565.5196, vec4(22.69, 848.971, 363.321, -875.743) + 3565.5196, vec4(_GLF_IDENTITY(22.69, (22.69) + 0.0), 848.971, 363.321, -875.743) + 3565.5196)));
      if(_GLF_DEAD(false))
       {
        _GLF_color = vec4(1959.3411, 9589.6534, -84.59, -9.8);
       }
     }
    float GLF_dead2r = fract(GLF_dead2y + sin(_GLF_IDENTITY(GLF_dead2pos.x + donor_replacementGLF_dead2time, clamp(_GLF_IDENTITY(GLF_dead2pos.x + donor_replacementGLF_dead2time, min(GLF_dead2pos.x + donor_replacementGLF_dead2time, GLF_dead2pos.x + donor_replacementGLF_dead2time)), _GLF_IDENTITY(GLF_dead2pos.x + donor_replacementGLF_dead2time, (_GLF_IDENTITY(GLF_dead2pos.x + donor_replacementGLF_dead2time, clamp(GLF_dead2pos.x + donor_replacementGLF_dead2time, GLF_dead2pos.x + donor_replacementGLF_dead2time, GLF_dead2pos.x + donor_replacementGLF_dead2time))) + 0.0), GLF_dead2pos.x + donor_replacementGLF_dead2time))));
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(93.54, -6.9, 6802.7446, 3.8);
     }
    if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord.x < 0.0, ! (_GLF_IDENTITY(! (gl_FragCoord.x < 0.0), ! (! (! (gl_FragCoord.x < 0.0))))))))))
     {
      if(_GLF_DEAD(_GLF_IDENTITY(false, (true ? false : _GLF_FUZZED(bvec3(true, false, true)[2])))))
       {
        _GLF_IDENTITY(_GLF_color = refract(vec4(4657.4299, 7.6, -78.01, 776.510), vec4(-77.75, -96.25, -716.344, _GLF_IDENTITY(0.5, min(0.5, 0.5))), -0.7), vec4(1.0, 1.0, 1.0, 1.0) * (_GLF_color = refract(vec4(4657.4299, 7.6, -78.01, 776.510), vec4(-77.75, -96.25, -716.344, _GLF_IDENTITY(0.5, min(0.5, 0.5))), -0.7)));
       }
      vec3 donor_replacementGLF_dead6rd = _GLF_FUZZED(donor_replacementGLF_dead2gl_FragColor.wxx);
      vec3 donor_replacementGLF_dead6ro = _GLF_FUZZED(vec3(45.46, -7253.3263, 0.8));
      {
       vec2 GLF_dead6s = GLF_dead6map(donor_replacementGLF_dead6ro + donor_replacementGLF_dead6rd * donor_replacementGLF_dead2time);
       if(abs(GLF_dead6s.x) < 0.001)
        vec2(donor_replacementGLF_dead2time, GLF_dead6s.y);
       donor_replacementGLF_dead2time += GLF_dead6s.x * .5;
      }
     }
    float GLF_dead2b = fract(GLF_dead2y);
    donor_replacementGLF_dead2gl_FragColor = vec4(GLF_dead2r, _GLF_IDENTITY(smoothstep(_GLF_IDENTITY(GLF_dead2r, (true ? _GLF_IDENTITY(GLF_dead2r, clamp(GLF_dead2r, _GLF_IDENTITY(GLF_dead2r, (_GLF_IDENTITY(true ? GLF_dead2r : _GLF_FUZZED(x), abs(0.0) + (true ? GLF_dead2r : _GLF_FUZZED(x))))), GLF_dead2r)) : _GLF_FUZZED(9.6))), 2.03, .3), (smoothstep(GLF_dead2r, 2.03, .3)) - log(1.0)) * .7, smoothstep(GLF_dead2b, 0.05, .34), 1.0);
    if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(_GLF_IDENTITY(gl_FragCoord.y, clamp(gl_FragCoord.y, _GLF_IDENTITY(gl_FragCoord.y, (_GLF_IDENTITY(gl_FragCoord.y, max(gl_FragCoord.y, gl_FragCoord.y))) / 1.0), _GLF_IDENTITY(gl_FragCoord, clamp(_GLF_IDENTITY(gl_FragCoord, clamp(gl_FragCoord, gl_FragCoord, gl_FragCoord)), gl_FragCoord, gl_FragCoord)).y)), (_GLF_IDENTITY(gl_FragCoord.y, _GLF_IDENTITY(clamp(gl_FragCoord.y, _GLF_IDENTITY(gl_FragCoord, vec4(_GLF_ONE(1.0, injectionSwitch.y), _GLF_ONE(1.0, injectionSwitch.y), _GLF_ONE(1.0, injectionSwitch.y), _GLF_ONE(1.0, injectionSwitch.y)) * (gl_FragCoord)).y, gl_FragCoord.y), min(clamp(gl_FragCoord.y, gl_FragCoord.y, gl_FragCoord.y), clamp(gl_FragCoord.y, _GLF_IDENTITY(gl_FragCoord.y, min(gl_FragCoord.y, gl_FragCoord.y)), gl_FragCoord.y))))) + _GLF_IDENTITY(0.0, min(0.0, 0.0))) < tan(0.0)))))
     {
      if(_GLF_DEAD(false))
       {
        _GLF_IDENTITY(_GLF_color = vec4(2.3, -8.3, -2.5, 325.415), (_GLF_color = vec4(2.3, -8.3, -2.5, _GLF_IDENTITY(325.415, (_GLF_IDENTITY(325.415, 0.0 + (325.415))) / cos(0.0)))) * vec4(1.0, 1.0, 1.0, 1.0));
        if(_GLF_DEAD(_GLF_IDENTITY(false, (true ? _GLF_IDENTITY(false, false || (false)) : _GLF_FUZZED(true)))))
         {
          _GLF_color = (vec4(9.9, 4443.4392, 4.6, -64.16) - vec4(-925.390, 9706.7614, 164.421, 6.9));
         }
       }
      vec3 donor_replacementGLF_dead4col = _GLF_FUZZED((GLF_dead2y * _GLF_IDENTITY(mix(vec3(-1.9, _GLF_IDENTITY(-4.1, (_GLF_TRUE(true, (gl_FragCoord.y >= 0.0)) ? -4.1 : _GLF_FUZZED(y))), -4829.9598), vec3(6472.8981, -5600.6176, _GLF_IDENTITY(-96.03, (-96.03) - 0.0)), bvec3(true, true, false)), (mix(vec3(-1.9, _GLF_IDENTITY(-4.1, (_GLF_TRUE(true, (gl_FragCoord.y >= 0.0)) ? -4.1 : _GLF_FUZZED(y))), -4829.9598), vec3(_GLF_IDENTITY(6472.8981, max(6472.8981, _GLF_IDENTITY(6472.8981, 0.0 + (6472.8981)))), -5600.6176, _GLF_IDENTITY(-96.03, (-96.03) - 0.0)), bvec3(true, true, false))) * _GLF_IDENTITY(vec3(1.0, 1.0, _GLF_IDENTITY(1.0, (_GLF_IDENTITY(1.0, min(1.0, 1.0))) - 0.0)), max(vec3(1.0, 1.0, 1.0), _GLF_IDENTITY(vec3(1.0, 1.0, 1.0), (vec3(1.0, 1.0, 1.0)) - vec3(0.0, 0.0, 0.0)))))));
      float donor_replacementGLF_dead4layers = _GLF_FUZZED(r);
      if(_GLF_IDENTITY(donor_replacementGLF_dead4layers > 12., _GLF_IDENTITY(_GLF_IDENTITY(false, (false ? _GLF_FUZZED((ivec2(78560, 84689) != (- ivec2(-42871, -11258)))) : false)), true && (_GLF_IDENTITY(false, true && (false)))) || (_GLF_IDENTITY(donor_replacementGLF_dead4layers > 12., (_GLF_FALSE(false, (gl_FragCoord.y < 0.0)) ? _GLF_FUZZED(false) : donor_replacementGLF_dead4layers > 12.)))) || donor_replacementGLF_dead4col.g > 1.0 || r > 8.)
       ;
     }
   }
  }
 float b = fract(y);
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(99.81, 9.0, 465.530, 8.3);
  }
 if(_GLF_DEAD(false))
  {
   const int donor_replacementGLF_dead8MENGER_ITERATIONS = _GLF_FUZZED(_GLF_IDENTITY(-79624, (true ? -79624 : _GLF_FUZZED(GLF_dead8MENGER_ITERATIONS))));
   vec3 donor_replacementGLF_dead8p = _GLF_FUZZED(_GLF_IDENTITY(faceforward(vec3(-0.7, _GLF_IDENTITY(_GLF_IDENTITY(2635.2593, (_GLF_TRUE(_GLF_IDENTITY(true, true && (true)), (injectionSwitch.x < injectionSwitch.y)) ? 2635.2593 : _GLF_FUZZED(time))), min(_GLF_IDENTITY(_GLF_IDENTITY(2635.2593, max(2635.2593, 2635.2593)), clamp(2635.2593, 2635.2593, 2635.2593)), 2635.2593)), -322.864), _GLF_IDENTITY((pos * mat3x2(2.2, 2.9, 5.9, 147.041, 8673.1956, 61.22)), max(_GLF_IDENTITY((pos * mat3x2(2.2, 2.9, 5.9, 147.041, 8673.1956, 61.22)), clamp((pos * mat3x2(2.2, 2.9, 5.9, 147.041, 8673.1956, _GLF_IDENTITY(61.22, (_GLF_IDENTITY(61.22, min(61.22, _GLF_IDENTITY(_GLF_IDENTITY(61.22, clamp(_GLF_IDENTITY(61.22, min(61.22, 61.22)), 61.22, 61.22)), min(61.22, 61.22))))) * 1.0))), (pos * mat3x2(2.2, 2.9, 5.9, _GLF_IDENTITY(147.041, max(_GLF_IDENTITY(147.041, _GLF_IDENTITY(1.0, (1.0) / sqrt(1.0)) * (147.041)), _GLF_IDENTITY(147.041, 1.0 * (147.041)))), 8673.1956, 61.22)), (pos * mat3x2(2.2, 2.9, 5.9, 147.041, _GLF_IDENTITY(8673.1956, max(8673.1956, 8673.1956)), 61.22)))), (_GLF_IDENTITY(pos, vec2(1.0, 1.0) * (pos)) * mat3x2(2.2, 2.9, 5.9, 147.041, 8673.1956, 61.22)))), vec3(809.537, 434.854, _GLF_IDENTITY(-1.5, clamp(-1.5, _GLF_IDENTITY(-1.5, clamp(-1.5, -1.5, -1.5)), -1.5)))), max(faceforward(_GLF_IDENTITY(vec3(-0.7, 2635.2593, -322.864), clamp(_GLF_IDENTITY(vec3(-0.7, 2635.2593, -322.864), clamp(vec3(-0.7, 2635.2593, -322.864), vec3(-0.7, 2635.2593, -322.864), vec3(-0.7, 2635.2593, -322.864))), _GLF_IDENTITY(vec3(-0.7, 2635.2593, -322.864), max(vec3(-0.7, 2635.2593, -322.864), vec3(-0.7, 2635.2593, _GLF_IDENTITY(-322.864, min(-322.864, _GLF_IDENTITY(-322.864, max(-322.864, -322.864))))))), vec3(-0.7, 2635.2593, -322.864))), (_GLF_IDENTITY(_GLF_IDENTITY(pos * mat3x2(2.2, 2.9, 5.9, 147.041, 8673.1956, 61.22), vec3(0.0, 0.0, 0.0) + (pos * mat3x2(2.2, 2.9, 5.9, 147.041, 8673.1956, 61.22))), (pos * mat3x2(2.2, 2.9, 5.9, 147.041, 8673.1956, 61.22)) - tan(vec3(_GLF_IDENTITY(0.0, (false ? _GLF_FUZZED(x) : 0.0)), 0.0, 0.0)))), vec3(809.537, 434.854, -1.5)), faceforward(vec3(-0.7, 2635.2593, -322.864), (pos * mat3x2(2.2, 2.9, 5.9, 147.041, 8673.1956, 61.22)), vec3(809.537, 434.854, -1.5)))));
   {
    float GLF_dead8scale = 1.0;
    float GLF_dead8dist = 0.0;
    for(
        int GLF_dead8i = 1;
        GLF_dead8i < donor_replacementGLF_dead8MENGER_ITERATIONS;
        GLF_dead8i ++
    )
     {
      GLF_dead8dist = max(GLF_dead8dist, _GLF_IDENTITY(- GLF_dead8sdCrossRepScale(donor_replacementGLF_dead8p, GLF_dead8scale), (- GLF_dead8sdCrossRepScale(donor_replacementGLF_dead8p, GLF_dead8scale)) * 1.0));
      GLF_dead8scale *= 3.0;
     }
    GLF_dead8dist;
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(6954.3222, 4.0, 186.819, 9.8);
     }
   }
  }
 _GLF_IDENTITY(_GLF_color = vec4(r, smoothstep(r, _GLF_IDENTITY(2.03, 1.0 * (2.03)), .3) * .7, smoothstep(_GLF_IDENTITY(b, (b) - _GLF_IDENTITY(sqrt(0.0), (true ? sqrt(0.0) : _GLF_FUZZED(mat3(44.78, -3637.7561, 66.93, _GLF_IDENTITY(_GLF_IDENTITY(4.7, max(4.7, _GLF_IDENTITY(4.7, min(4.7, 4.7)))), (4.7) * sqrt(1.0)), -6.5, 2.2, -8.4, -349.879, 0.0)[1][1])))), 0.05, .34), 1.0), vec4(1.0, 1.0, 1.0, 1.0) * (_GLF_IDENTITY(_GLF_color = vec4(r, smoothstep(r, _GLF_IDENTITY(2.03, 1.0 * _GLF_IDENTITY((_GLF_IDENTITY(_GLF_IDENTITY(2.03, (2.03) + tan(length(0.0))), (2.03) / 1.0)), ((_GLF_IDENTITY(2.03, (_GLF_IDENTITY(2.03, (2.03) - 0.0)) / 1.0))) / 1.0)), .3) * .7, smoothstep(_GLF_IDENTITY(b, (b) - sqrt(0.0)), 0.05, .34), 1.0), (_GLF_color = vec4(r, smoothstep(r, _GLF_IDENTITY(2.03, 1.0 * (2.03)), .3) * .7, smoothstep(_GLF_IDENTITY(b, (_GLF_IDENTITY(b, (b) * 1.0)) - sqrt(0.0)), _GLF_IDENTITY(0.05, 1.0 * (0.05)), .34), 1.0)) + vec4(0.0, 0.0, _GLF_IDENTITY(0.0, (false ? _GLF_FUZZED(determinant(mat4(-88.53, 924.736, -50.28, 0.5, -1.1, -8.3, -7491.9610, -386.801, -56.77, 5.0, 5.7, 4.6, -45.57, -731.726, 9.8, -7.6))) : _GLF_IDENTITY(0.0, clamp(0.0, 0.0, 0.0)))), 0.0))));
}
