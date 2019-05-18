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

vec4 iMouse = vec4(0.0);

vec2 rand2(vec2 seed)
{
 if(_GLF_WRAPPED_IF_TRUE(true))
  {
   return vec2(fract(sin(dot(seed.xy, vec2(12.9898, 78.233))) * 43758.5453), fract(cos(dot(seed.xy, vec2(4.898, 7.23))) * 23421.631));
  }
 else
  {
  }
}
vec2 noise2(vec2 uv)
{
 vec2 e = vec2(1., 0.);
 if(_GLF_DEAD(false))
  {
   _GLF_color = cos(vec4(-986.849, _GLF_IDENTITY(3.5, clamp(_GLF_IDENTITY(3.5, min(3.5, 3.5)), 3.5, _GLF_IDENTITY(3.5, (_GLF_IDENTITY(3.5, min(3.5, 3.5))) - 0.0))), -7713.3829, -255.236));
  }
 vec2 i = floor(uv);
 vec2 t = fract(uv);
 t = t * t * (_GLF_IDENTITY(3. - 2. * t, vec2(0.0, 0.0) + (3. - 2. * t)));
 vec2 r00 = rand2((i + e.yy) * _GLF_IDENTITY(.0254, sqrt(0.0) + (.0254)));
 vec2 r10 = rand2((i + e.xy) * .0254);
 vec2 r01 = rand2((_GLF_IDENTITY(i + e.yx, clamp(i + e.yx, i + e.yx, _GLF_IDENTITY(i + e.yx, min(i + e.yx, _GLF_IDENTITY(i + e.yx, max(i + e.yx, i + e.yx))))))) * .0254);
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-146.760, -6563.2493, 1.2, -3.7);
  }
 vec2 r11 = rand2((i + e.xx) * .0254);
 return mix(mix(r00, r10, t.x), mix(r01, r11, t.x), t.y);
}
float noise(vec2 uv)
{
 return noise2(uv).x;
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(303.459, -5787.6827, 2.5, -595.387);
    }
   _GLF_color = (mat2x4(-646.220, -9.6, -7.1, 2.5, 3.7, -6.5, 1678.7344, -9521.0944) * _GLF_IDENTITY(vec2(-1.7, -721.093), clamp(vec2(-1.7, -721.093), vec2(-1.7, -721.093), _GLF_IDENTITY(vec2(-1.7, -721.093), (vec2(-1.7, -721.093)) / exp(vec2(0.0, 0.0))))));
  }
}
float _GLF_outlined_0(float a, float s, float repeat)
{
 for(
     int _injected_loop_counter = 1;
     _GLF_WRAPPED_LOOP(_injected_loop_counter > 0);
     _injected_loop_counter --
 )
  {
   return mod(a / 2. / s, repeat);
  }
}
vec2 moda(vec2 uv, float repeat, out float iter)
{
 float a = atan(uv.y, uv.x);
 float s = 3.14159265 / repeat;
 iter = _GLF_outlined_0(a, s, repeat);
 a = mod(a, 2. * s) - s;
 return length(uv) * vec2(cos(a), sin(a));
}
vec4 _GLF_outlined_25()
{
 return mat2x4(1914.5283, 4.9, 6.3, -6650.5695, 6.8, -122.960, 99.42, -666.659)[0];
}
vec2 elbow(vec2 uv)
{
 vec2 tuv = vec2(- uv.y + .295, uv.x);
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = vec4(384.623, 4.8, 3.2, 43.26);
  }
 ;
 if(_GLF_DEAD(false))
  {
   _GLF_color = _GLF_outlined_25();
  }
 float a = atan(uv.x, uv.y);
 vec2 ruv = vec2(2. * 3.14159265 * a * .03, length(uv));
 return mix(_GLF_IDENTITY(tuv, (tuv) - vec2(0.0, 0.0)), mix(uv, ruv, step(0., uv.x)), step(0., uv.y));
}
float smin(float a, float b, float k)
{
 float h = max(k - abs(a - b), 0.0) / k;
 for(
     int _injected_loop_counter = 0;
     _GLF_WRAPPED_LOOP(_injected_loop_counter < int(_GLF_ONE(1.0, injectionSwitch.y)));
     _injected_loop_counter ++
 )
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = acos(vec4(-3185.5634, 1.2, 4.5, -4382.4972));
    }
  }
 return min(a, b) - h * h * k * (1.0 / 4.0);
}
vec2 _GLF_outlined_1(vec2 uv, float steps, float iter)
{
 return moda(uv, steps, iter);
}
float circleRing(vec2 uv, float steps, float minr, float maxr, float angleJitter, float angularSpeed, float rotation)
{
 if(_GLF_DEAD(false))
  {
   _GLF_color = round(vec4(687.765, -434.519, 48.19, -6.4));
  }
 float iter;
 if(_GLF_DEAD(_GLF_IDENTITY(_GLF_FALSE(_GLF_IDENTITY(false, true && (false)), (gl_FragCoord.x < 0.0)), (_GLF_IDENTITY(_GLF_FALSE(false, (gl_FragCoord.x < 0.0)), ! (! (_GLF_FALSE(false, (gl_FragCoord.x < 0.0)))))) || _GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)))))
  {
   _GLF_IDENTITY(_GLF_color = vec4(-54.46, 400.032, -8.9, -7955.0170), vec4(1.0, 1.0, 1.0, 1.0) * (_GLF_IDENTITY(_GLF_color = vec4(-54.46, 400.032, -8.9, -7955.0170), (_GLF_color = vec4(-54.46, 400.032, -8.9, -7955.0170)) - vec4(0.0, 0.0, 0.0, 0.0))));
  }
 float a = atan(uv.y, uv.x);
 a += rotation + time * angularSpeed;
 uv = length(uv) * vec2(cos(a), sin(a));
 uv = _GLF_outlined_1(uv, steps, iter);
 vec2 r = rand2(vec2(floor(iter) * .0354, 0.21));
 float d = length(uv - vec2(.3 + mix(maxr, minr, r.x), mix(- 1., 1., r.y) * .08 * angleJitter)) - mix(minr, maxr, r.x);
 return - d;
}
float shape1(vec2 uv, float steps, float angleJitter, float angularSpeed)
{
 float d = length(uv) - .4;
 d = min(d, - circleRing(uv, steps, .05, .08, angleJitter, angularSpeed, .0));
 return - d;
}
struct StripesOpt {
 float distorsion;
 float spacing;
 float bump;
} ;

float _GLF_outlined_2(float d, float sides, vec2 r)
{
 return smin(d, sides, mix(0.10, 0.05, r.y));
}
float stripes(vec2 uv, StripesOpt opt)
{
 vec2 ouv = uv;
 float s = 10.;
 float iter = floor(uv.x * s + .25);
 uv.x = mod(uv.x, 1. / 10.) - 1. / 10. / 2.;
 vec2 r = rand2(vec2(iter * _GLF_IDENTITY(.0234, (.0234) / 1.0), iter * 0.8913));
 float ax = mix(- 1., 1., r.x) * .05 * opt.distorsion;
 float d = sin(2. * 3.14159265 * (uv.x + uv.y * ax) * 10.);
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = vec4(-1.3, 7.0, -417.020, -3.1);
  }
 d += mix(- .5 + opt.spacing, .5 + opt.spacing, r.x);
 d *= .03;
 float sides = .47 - abs(uv.y);
 float nobump = (1. - step(.5, opt.bump)) * 99999.;
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   _GLF_color = vec4(9825.5027, -4.6, -9.4, -2.6);
  }
 uv = ouv;
 s = 2.;
 uv.x = mod(uv.x, s) - s / _GLF_IDENTITY(2., (_GLF_IDENTITY(2., clamp(2., 2., 2.))) / cos(0.0));
 if(_GLF_DEAD(false))
  {
   _GLF_color = reflect(vec4(3921.0768, 1144.2948, -66.58, -1124.6245), vec4(7.0, -3.0, -2.5, -1.1));
  }
 sides = min(sides, length(uv - vec2(0., .9)) - 0.6 + nobump);
 sides = min(sides, length(uv - vec2(0.5, - .85)) - 0.55 + nobump);
 if(_GLF_DEAD(false))
  {
   _GLF_color = faceforward(atan(vec4(863.153, 9.1, 5.2, -8850.7589)), vec4(2.8, -5.8, -89.79, 66.23), (-5694.8898 + vec4(4.7, 0.8, -9.2, 76.45)));
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < abs(0.0)))))
    {
     _GLF_color = smoothstep(-5258.9529, mix(95.20, -3.9, 2.6), floor(vec4(-1.7, 5.7, -9350.4850, -369.678)));
    }
  }
 d = _GLF_outlined_2(d, sides, r);
 return d;
 if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    {
     _GLF_color = vec4(8864.7396, -8.4, 5411.0159, -6.0);
    }
  }
 else
  {
  }
}
float fill(float d)
{
 if(_GLF_DEAD(false))
  {
   _GLF_color = smoothstep(vec4(-8.7, -8783.5324, -8.2, -15.04), faceforward(vec4(6.2, 64.66, 8.7, -7441.9696), vec4(5.6, -0.9, -7.6, -0.5), vec4(-829.323, 7781.5383, -817.813, 2750.6577)), vec4(-451.525, -91.33, 1.7, 8.4));
  }
 return smoothstep(0., .003, d);
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-6704.3779, 9.5, -3.6, -97.19);
  }
}
float fit01(float a, float b, float x)
{
 return (clamp(x, a, b) - a) / (b - a);
}
struct StripesCircleOpt {
 float minRadius;
 float maxRadius;
 float kappa;
 float omega;
 float phi;
} ;

float stripesCircle(vec2 uv, StripesCircleOpt opt, StripesOpt sopt)
{
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(0.4, 58.08, 2500.2459, 2.0).sptp;
  }
 _GLF_IDENTITY(uv = vec2(atan(uv.y, uv.x) / 3.14159265 * opt.kappa + time * opt.omega + opt.phi, fit01(opt.minRadius, opt.maxRadius, length(uv)) * 2. - 1.), (_GLF_IDENTITY(uv = vec2(atan(uv.y, uv.x) / 3.14159265 * opt.kappa + time * opt.omega + opt.phi, fit01(opt.minRadius, opt.maxRadius, length(uv)) * 2. - 1.), (uv = vec2(atan(uv.y, uv.x) / 3.14159265 * opt.kappa + time * opt.omega + opt.phi, fit01(opt.minRadius, opt.maxRadius, length(uv)) * 2. - 1.)) - vec2(0.0, 0.0))) - vec2(0.0, 0.0));
 return stripes(uv, sopt);
}
float stripesCircle1(vec2 uv, float distorsion)
{
 do
  {
   return stripesCircle(uv, StripesCircleOpt(.25, .385, 3., - .05, 0.), StripesOpt(distorsion, 0., 1.));
  }
 while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
 if(_GLF_DEAD(false))
  {
   _GLF_color = normalize(vec4(8.9, -86.62, -9924.7761, -166.750));
  }
}
float stripesCircle2(vec2 uv, float distorsion)
{
 if(_GLF_WRAPPED_IF_FALSE(_GLF_IDENTITY(false, (_GLF_TRUE(true, (gl_FragCoord.x >= 0.0)) ? false : _GLF_FUZZED(true)))))
  {
  }
 else
  {
   return stripesCircle(uv, StripesCircleOpt(.354, .395, 3.5, - .01, 112.2), StripesOpt(distorsion, .5, 1.));
  }
}
float stripesCircle3(vec2 uv, float distorsion)
{
 return stripesCircle(uv, StripesCircleOpt(.45, .9, 7.5, - _GLF_IDENTITY(.03, 0.0 + (.03)), 57.3), StripesOpt(distorsion, 0., 1.));
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = vec4(4.5, 1.7, _GLF_IDENTITY(-1.2, (false ? _GLF_FUZZED(distorsion) : _GLF_IDENTITY(-1.2, min(_GLF_IDENTITY(-1.2, (true ? -1.2 : _GLF_FUZZED(time))), -1.2)))), -8377.8132);
  }
}
vec4 _GLF_outlined_26()
{
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-7544.0956, 308.830, 47.16, -40.49);
  }
 return (vec4(-2912.7037, -67.26, -464.538, 2.4));
}
float stripesCircle4(vec2 uv, float distorsion)
{
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = _GLF_outlined_26();
  }
 return stripesCircle(uv, StripesCircleOpt(.4, .95, 6.5, - .03, 32.7), StripesOpt(distorsion, 0., 1.));
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   do
    {
     _GLF_color = vec4(1.4, -8.8, -6.2, 6.9);
    }
   while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_ZERO(0.0, injectionSwitch.x)))));
  }
}
float circle(vec2 uv, float r)
{
 return - (length(uv) - r);
}
float contours(float shape, float thickness)
{
 return thickness - abs(shape);
}
vec2 _GLF_outlined_3(vec2 uv)
{
 return abs(uv);
}
float capsule(vec2 uv, float r, float h)
{
 uv = _GLF_outlined_3(uv);
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-61.03, -5.3, -1.5, -9.3);
  }
 return max(circle(uv - vec2(.0, h), r), min(r - uv.x, h - uv.y));
 if(_GLF_DEAD(false))
  {
   do
    {
     _GLF_color = pow(vec4(8.7, -724.181, -11.78, 3340.6581), vec4(-321.717, 33.99, -2455.7833, _GLF_IDENTITY(-8045.6934, min(_GLF_IDENTITY(-8045.6934, max(-8045.6934, -8045.6934)), -8045.6934))));
    }
   while(_GLF_WRAPPED_LOOP(false));
  }
}
vec4 _GLF_outlined_27()
{
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   _GLF_color = (atan(-9465.3095) / vec4(5.8, -8.9, 9.1, 1638.2612));
  }
 return vec4(-450.753, -917.239, -48.65, -4121.5562);
}
mat2 rot(float theta)
{
 if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(injectionSwitch.x > injectionSwitch.y, false || (injectionSwitch.x > injectionSwitch.y))))))
    {
     _GLF_IDENTITY(_GLF_color = _GLF_outlined_27(), (_GLF_color = _GLF_outlined_27()) - vec4(0.0, 0.0, 0.0, 0.0));
     if(_GLF_DEAD(_GLF_IDENTITY(false, ! (! (false)))))
      {
       _GLF_color = vec4(1.3, vec3(-93.49, 43.94, -6.6));
      }
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     _GLF_color = mat3x4(-2.6, 712.599, -0.5, -56.54, -2.0, -18.75, -8.6, 179.699, -9.4, 988.344, -6.9, -841.574)[2];
    }
  }
 else
  {
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = sin(vec4(711.219, 1.1, -7.9, -97.90));
  }
 float c = cos(theta);
 float s = sin(theta);
 if(_GLF_DEAD(false))
  {
   if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
    {
     _GLF_color = vec4(-27.84, -66.52, -6.6, 2.3);
    }
   else
    {
    }
  }
 return mat2(c, s, - s, c);
}
float _GLF_outlined_4(float width, float aperture)
{
 return (width * width / aperture - aperture) / 2.;
}
void solveCircle(in float width, in float aperture, out float radius, out float offset)
{
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-38.58, -8.0, -4019.7702, -760.741);
  }
 if(_GLF_WRAPPED_IF_FALSE(false))
  {
  }
 else
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-5071.8807, vec3(0.5, 2.9, 229.667));
    }
   offset = _GLF_outlined_4(width, aperture);
  }
 radius = offset + aperture;
}
float _GLF_outlined_28(float lowerEyeAperture, float open)
{
 return mix(.001, lowerEyeAperture, open);
}
vec3 _GLF_outlined_29(vec3 eyeLayer, float pupille)
{
 return mix(eyeLayer, vec3(1.), fill(pupille));
}
float _GLF_outlined_30(float outerCircle)
{
 return outerCircle;
}
vec3 drawMainEye(vec3 col, vec2 uv, vec2 mouse, out float dist)
{
 float outerCircle = shape1(uv * .99, 8., 1., .1);
 float blueCircle = - (length(uv) - 0.392);
 float blueCircle2 = - (length(uv) - mix(0.355, 0.36, noise(uv * 15.)));
 float ring1 = stripesCircle1(uv, .5);
 float ring2 = stripesCircle2(uv, .5);
 float upperEyelidRing = stripesCircle3(uv - vec2(0., - .5), .5);
 float lowerEyelidRing = stripesCircle4(uv + vec2(0., - .5), .5);
 vec2 innerCircleNoise = (noise2(uv * 2. + time) - .5) * .05;
 float innerCircle = shape1((uv + innerCircleNoise) * 1.4, 9., .25, - .07);
 float open = fit01(.0, .005, sin(time * 2.) * .5 + .5);
 float upperEyeAperture = mix(.15, .23, max(0., mouse.y) * 2.);
 float lowerEyeAperture = mix(.1, .23, clamp(max(0., - mouse.y + .3) * 3., 0., 1.));
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   _GLF_color = vec4(-8451.8257, -76.65, 34.64, -781.059);
  }
 float c = .28;
 float b = mix(.001, upperEyeAperture, open);
 float a, r;
 solveCircle(c, b, r, a);
 float upperEye = - (length(uv + innerCircleNoise - vec2(0., .01 - a)) - r);
 float upperEyelid = - (length(uv + innerCircleNoise) - mix(0.27, 0.28, noise(uv * 15. + 3.4)));
 upperEyelid = min(upperEyelid, - upperEye);
 b = _GLF_outlined_28(lowerEyeAperture, open);
 solveCircle(c, b, r, a);
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = (vec4(-6.2, -8797.3997, 163.666, 528.998) * vec4(22.64, 7317.9687, -70.03, -3548.9317));
  }
 float lowerEye = - (length(uv + innerCircleNoise + vec2(0., - .01 - a)) - r);
 float lowerEyelid = - (length(uv + innerCircleNoise) - mix(0.27, 0.275, noise(uv * 15. + 3.464)));
 lowerEyelid = min(lowerEyelid, - lowerEye);
 b = lowerEyeAperture;
 solveCircle(c, b, r, a);
 vec2 eyeCenter = - vec2(0., - .025 - a);
 float eye = 1.;
 eye = min(_GLF_IDENTITY(eye, 1.0 * (eye)), upperEye - .01);
 eye = min(eye, lowerEye - .01);
 do
  {
   ring1 = smin(ring1, - innerCircle - mix(.0, .03, noise(uv * 12. + time * .5)), 0.02);
  }
 while(_GLF_WRAPPED_LOOP(false));
 upperEyelidRing = smin(upperEyelidRing, upperEyelid - .01, 0.01);
 if(_GLF_DEAD(false))
  {
   _GLF_color = (false ? vec4(159.022, -22.83, -9.9, -82.77) : vec4(-5.8, -902.765, 7.6, -0.9));
  }
 lowerEyelidRing = min(lowerEyelidRing, lowerEyelid);
 if(_GLF_DEAD(false))
  {
   _GLF_color = clamp(_GLF_IDENTITY(vec4(-4075.6172, -9.9, 1.2, 2390.1432), min(vec4(-4075.6172, -9.9, 1.2, 2390.1432), vec4(-4075.6172, -9.9, 1.2, 2390.1432))), vec4(7585.2231, 1415.8122, -7.1, -5.2), vec4(-6.7, 0.5, -71.80, -1270.5288));
  }
 vec2 eyeOffset = mouse * vec2(.2, .5) + vec2(.0, - .1);
 eyeOffset.y = min(eyeOffset.y, 0.03);
 float eyeRing = stripesCircle(uv - eyeCenter - eyeOffset, StripesCircleOpt(.05, .36, 2.5, - .05, 0.), StripesOpt(.5, 0., 0.));
 float pupille = - (_GLF_IDENTITY(length(uv - eyeCenter - eyeOffset) - .09, (length(uv - eyeCenter - eyeOffset) - .09) + 0.0));
 eyeRing = min(eyeRing, - .03 - upperEyelid) * .2;
 float eyeRingFade = clamp((- upperEyelid * 7.) * (- lowerEyelid * 7.) + .2, 0., .9);
 float eyeWhite = length(uv + innerCircleNoise - _GLF_IDENTITY(eyeCenter, max(_GLF_IDENTITY(eyeCenter, max(eyeCenter, eyeCenter)), eyeCenter))) - mix(.325, .31, noise(uv * 8. + 45.1 + time * .5)) * 3.4 * pow(r, 1.1);
 vec3 eyeLayer = vec3(.0, .3, .6);
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-781.028, 6.8, -7.2, 18.87);
  }
 eyeLayer = mix(eyeLayer, vec3(1., .292, .173), fill(eyeRing) * eyeRingFade);
 eyeLayer = _GLF_outlined_29(eyeLayer, pupille);
 eyeLayer = mix(eyeLayer, vec3(1.), fill(eyeWhite));
 col = mix(col, vec3(.14, .21, .3), fill(outerCircle));
 col = mix(col, vec3(.1, .3, .5), fill(blueCircle));
 col = mix(col, vec3(.7, .8, .85), fill(blueCircle2));
 col = mix(col, vec3(0.65, 0.3, 0.6), _GLF_IDENTITY(fill(ring1 * .3), (true ? fill(ring1 * .3) : _GLF_FUZZED(eyeWhite))));
 if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
  }
 else
  {
   col = mix(col, vec3(0.9, 0.8, 0.2), fill(_GLF_IDENTITY(ring2 * .25, clamp(_GLF_IDENTITY(ring2 * .25, (ring2 * .25) + 0.0), ring2 * .25, ring2 * .25))));
  }
 if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
  }
 else
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(-494.571, 2.8, 95.53, -663.588);
      }
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       _GLF_color = vec4(4.3, 998.552, -7.0, -805.569);
      }
     else
      {
      }
    }
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = mix(vec4(2.1, -564.938, 1.7, 5251.5585), vec4(9896.4306, -72.40, -9443.7890, 6.3), vec4(-2500.8286, -92.36, -5.5, 64.17));
  }
 col = mix(col, vec3(.14, .21, .3), fill(innerCircle));
 col = mix(col, eyeLayer, fill(eye));
 col = mix(col, vec3(1., .292, .173), fill(upperEyelid));
 col = mix(col, vec3(.75, .102, .073), fill(upperEyelidRing));
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   _GLF_color = (413.287 - vec4(-5547.7537, -3.0, 24.33, -1.4));
  }
 col = mix(col, vec3(.292, .85, .653), fill(lowerEyelid));
 col = mix(col, vec3(.75), fill(lowerEyelidRing));
 dist = _GLF_outlined_30(outerCircle);
 return col;
}
float _GLF_outlined_5(float eye, float upperEye)
{
 return min(eye, upperEye - .01);
}
vec4 _GLF_outlined_31()
{
 return vec4(2085.4026, 6.8, 4.8, 6.8).grba;
}
vec3 smallEye(vec2 uv, vec2 mouse, vec2 seed, vec3 eyeColor, out float dist)
{
 vec2 innerCircleNoise = (noise2(seed + _GLF_IDENTITY(uv, min(uv, uv)) * 3. + time * .2 + uv.y * 3.) - .5) * .03;
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   _GLF_color = vec4(-5.3, 39.84, 95.58, _GLF_IDENTITY(-73.56, (-73.56) / abs(1.0)));
  }
 vec2 r = rand2(seed);
 float freq = mix(.5, 1., r.x);
 float phi = r.y * 2. * 3.14159265;
 float open = fit01(.0, .002, sin(time * freq + phi) * _GLF_IDENTITY(.5, min(.5, .5)) + .5);
 float upperRadius, upperOffset, lowerRadius, lowerOffset, innerRadius, innerOffset;
 solveCircle(.175, mix(.001, .12, open), upperRadius, upperOffset);
 do
  {
   solveCircle(.175, mix(.001, _GLF_IDENTITY(.085, max(.085, .085)), open), lowerRadius, lowerOffset);
  }
 while(_GLF_WRAPPED_LOOP(_GLF_IDENTITY(false, (false) && true)));
 solveCircle(.175, .085, innerRadius, innerOffset);
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   _GLF_color = _GLF_outlined_31();
  }
 vec2 eyeCenter = - vec2(0., - .025 - innerOffset);
 vec2 eyeOffset = mouse * vec2(.1, .5) + vec2(.0, - .1);
 if(_GLF_DEAD(_GLF_IDENTITY(false, false || (false))))
  {
   _GLF_color = vec4(5037.3290, 18.13, _GLF_IDENTITY(-7409.8909, _GLF_ZERO(0.0, injectionSwitch.x) + (_GLF_IDENTITY(-7409.8909, clamp(-7409.8909, -7409.8909, -7409.8909)))), -6966.9142);
  }
 eyeOffset.y = min(eyeOffset.y, 0.03);
 eyeOffset = vec2(0.);
 float pupille = circle(uv - eyeCenter - eyeOffset, .08);
 float upperEye = circle(uv + innerCircleNoise - vec2(0., .01 - upperOffset), upperRadius);
 float lowerEye = circle(uv + innerCircleNoise + vec2(0., - .01 - lowerOffset), lowerRadius);
 float eyeRing = stripesCircle(uv - eyeCenter - eyeOffset, StripesCircleOpt(.05, .25, 2., - .05, 0.), StripesOpt(.5, _GLF_IDENTITY(0., (true ? 0. : _GLF_FUZZED(upperEye))), 0.));
 float eyeRingFade = clamp((- upperEye * 7.) * (- lowerEye * 7.) + .2, 0., .9);
 float eyeWhite = - circle(uv + innerCircleNoise - eyeCenter, mix(.95, .99, noise(seed + uv * 8. + _GLF_IDENTITY(45.1, (45.1) / 1.0) + time * .5)) * innerRadius);
 float eye = 1.;
 eye = _GLF_outlined_5(eye, upperEye);
 eye = min(eye, lowerEye - .01);
 vec3 col = vec3(.0, .3, _GLF_IDENTITY(.6, max(.6, .6)));
 col = mix(col, eyeColor, fill(eyeRing) * eyeRingFade);
 col = mix(col, vec3(1.), fill(pupille));
 for(
     int _injected_loop_counter = int(_GLF_ZERO(0.0, injectionSwitch.x));
     _GLF_WRAPPED_LOOP(_injected_loop_counter < 1);
     _injected_loop_counter ++
 )
  {
   col = mix(col, vec3(1.), fill(eyeWhite));
  }
 dist = eye;
 return col;
}
float _GLF_outlined_6(float a4)
{
 return 3.14159265 + 3.14159265 * a4;
}
vec2 _GLF_outlined_32(vec2 cc1, vec2 cc2, float a2)
{
 return mix(cc1, cc2, step(0.01, a2));
}
vec2 _GLF_outlined_33(vec2 cc, vec2 cc3, float a3)
{
 return mix(cc, cc3, step(0.01, a3));
}
vec2 anim1(float anim)
{
 float len = _GLF_IDENTITY(3.14159265 * .14, tan(0.0) + (3.14159265 * .14)) + .11 * 2. + 3.14159265 * .14 + .11 * 2.;
 vec2 cc = vec2(.14, .11);
 float theta;
 float a1 = fit01(.0, .22 / len, fract(anim));
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(3.2, 18.22, -3546.5271, -5.1);
  }
 float a2 = fit01(.22 / len, (.22 + 3.14159265 * .14) / len, fract(anim));
 float a3 = fit01((.22 + 3.14159265 * .14) / len, (.44 + 3.14159265 * .14) / len, fract(anim));
 float a4 = fit01((.44 + 3.14159265 * .14) / _GLF_IDENTITY(len, (false ? _GLF_FUZZED(theta) : _GLF_IDENTITY(len, (true ? len : _GLF_FUZZED(a2))))), 1., fract(anim));
 theta = 3.14159265 * a2;
 vec2 cc2 = vec2(.0, .11) + .14 * vec2(cos(theta), sin(theta));
 theta = _GLF_outlined_6(a4);
 vec2 cc4 = vec2(.0, - .11) + .14 * vec2(cos(theta), sin(theta));
 vec2 cc1 = vec2(.14, - .11) + a1 * vec2(0., .22);
 vec2 cc3 = vec2(- .14, .11) + a3 * vec2(0., - _GLF_IDENTITY(.22, (_GLF_IDENTITY(.22, (true ? .22 : _GLF_FUZZED(theta)))) / 1.0));
 cc = _GLF_outlined_32(cc1, cc2, a2);
 cc = _GLF_outlined_33(cc, cc3, a3);
 cc = mix(cc, cc4, step(0.01, a4));
 return cc;
}
vec4 _GLF_outlined_34()
{
 return (- vec4(8.6, 2442.9741, 40.93, 5.6));
}
vec3 _GLF_outlined_35(vec3 col, vec3 topEyeLayer, float topEyeDist)
{
 return mix(col, topEyeLayer, fill(topEyeDist));
}
vec3 drawSubEyes(vec3 col, vec2 uv, vec2 mouse, out float dist)
{
 uv -= vec2(- .7, - .065);
 mouse -= vec2(- .7, - .065);
 uv.x *= 1. + uv.y * uv.y * 1.5;
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   _GLF_color = (vec4(915.124, 2.3, -786.798, 7707.5140) - vec4(9.2, 7.6, -6.5, 42.26));
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-5.1, -2.0, -523.498, -295.407);
  }
 float mask = capsule(uv, .17, .11);
 float topEyeDist, bottomEyeDist;
 vec3 topEyeLayer = smallEye(uv - vec2(.0, .085), mouse - vec2(.0, .085), vec2(.12, _GLF_IDENTITY(.7896, clamp(_GLF_IDENTITY(.7896, (false ? _GLF_FUZZED(topEyeDist) : .7896)), .7896, .7896))), vec3(.7, .2, .5), topEyeDist);
 vec3 bottomEyeLayer = smallEye(uv - vec2(.0, - .11), mouse - vec2(.0, - .11), vec2(8.1, 54.16), vec3(1., .15, .14), bottomEyeDist);
 if(_GLF_DEAD(false))
  {
   _GLF_color = (((- vec4(-6.8, -9.0, -5.2, 8017.2241)) - -45.89) / vec2(7128.3609, 17.38).y);
  }
 float eyesMask = max(topEyeDist, bottomEyeDist);
 float h1Stripes = stripes(uv * vec2(3.5, 1.) + vec2(time * .08, .0), StripesOpt(0., 0., 0.));
 float h1InnerMask = min(mask, - eyesMask) - .01;
 h1InnerMask = _GLF_IDENTITY(min(h1InnerMask, - max(abs(uv.x) - .2, abs(uv.y) - .1)), (true ? min(h1InnerMask, - max(abs(uv.x) - .2, abs(uv.y) - .1)) : _GLF_FUZZED(eyesMask)));
 float h1StripesMask = h1InnerMask - .005;
 _GLF_IDENTITY(h1Stripes = smin(_GLF_IDENTITY(h1Stripes, (true ? _GLF_IDENTITY(h1Stripes, min(h1Stripes, h1Stripes)) : _GLF_FUZZED(sign(reflect(h1StripesMask, topEyeDist))))), h1StripesMask, .01), (true ? h1Stripes = smin(h1Stripes, h1StripesMask, .01) : _GLF_FUZZED(h1Stripes)));
 if(_GLF_DEAD(false))
  {
   _GLF_color = ceil((mat4(6.6, -9.9, -9.8, -3173.7008, -3.2, -56.31, -0.6, 9.4, -6799.8296, -1.4, -29.17, -1.8, 659.313, -1.5, 2.7, 1.7))[3]);
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = vec4(0.3, 7.3, -932.901, 46.06);
  }
 float h2Stripes = stripes(uv * vec2(3.5, 1.) + vec2(time * .08, .0), StripesOpt(0., 0., 0.));
 float h2InnerMask = min(mask, - eyesMask) - .01;
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   _GLF_color = exp2(mod(vec4(-55.36, -172.360, 8.0, 6731.9585), -8.0));
  }
 h2InnerMask = min(h2InnerMask, _GLF_IDENTITY(uv.y, clamp(uv.y, uv.y, _GLF_IDENTITY(uv.y, min(uv.y, uv.y)))) - .1);
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-7.3, 5799.5197, -78.29, 0.9);
  }
 float h2StripesMask = h2InnerMask - .005;
 if(_GLF_DEAD(false))
  {
   if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
    {
     _GLF_color = vec4(2.2, _GLF_IDENTITY(2.1, (2.1) * 1.0), 2.4, -329.721);
    }
   else
    {
    }
  }
 h2Stripes = smin(h2Stripes, h2StripesMask, .01);
 float h3Stripes = stripesCircle(uv - vec2(.0, .3), StripesCircleOpt(.3, .7, 4.5, - .03, 32.7), StripesOpt(0., 0., 0.));
 float h3InnerMask = min(mask, - eyesMask) - .01;
 h3InnerMask = min(h3InnerMask, - uv.y - .1);
 float h3StripesMask = h3InnerMask - .005;
 h3Stripes = smin(h3Stripes, h3StripesMask, .01);
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   _GLF_color = vec4(-2.1, -0.3, -7.3, -333.852);
  }
 for(
     float i = 0.;
     _GLF_IDENTITY(i, min(_GLF_IDENTITY(i, 1.0 * (_GLF_IDENTITY(i, clamp(i, i, i)))), _GLF_IDENTITY(i, (_GLF_FALSE(false, (gl_FragCoord.y < 0.0)) ? _GLF_FUZZED(h3StripesMask) : _GLF_IDENTITY(i, (i) / 1.0))))) < 1.;
     i += _GLF_IDENTITY(.15, clamp(_GLF_IDENTITY(.15, (false ? _GLF_FUZZED(mask) : .15)), .15, .15))
 )
  {
   vec2 r = rand2(vec2(i, .167));
   vec2 cc = anim1(time * .05 + i + .01 * (r.x - .5));
   mask = max(mask, circle(uv - cc, mix(.045, .05, r.y)));
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-53.76, 49.39, 8301.4933, -0.6);
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = _GLF_outlined_34();
    }
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   _GLF_color = uintBitsToFloat(uvec4(73213u, 114287u, 170774u, 121856u));
  }
 col = mix(col, vec3(.14, _GLF_IDENTITY(.21, clamp(.21, .21, .21)), .3), fill(mask));
 col = mix(col, vec3(1., .32, .17), fill(_GLF_IDENTITY(h1InnerMask, clamp(h1InnerMask, h1InnerMask, h1InnerMask))));
 col = mix(col, vec3(.75, .8, .84), fill(h1Stripes));
 col = mix(col, vec3(.83, .88, .7), fill(h2InnerMask));
 col = mix(col, vec3(.75, .8, .84), fill(h2Stripes));
 col = mix(col, vec3(_GLF_IDENTITY(.83, max(_GLF_IDENTITY(.83, max(.83, .83)), .83)), .88, .7), fill(h3InnerMask));
 col = mix(col, vec3(0.6, _GLF_IDENTITY(0.3, clamp(0.3, _GLF_IDENTITY(0.3, clamp(_GLF_IDENTITY(0.3, (false ? _GLF_FUZZED(h2InnerMask) : 0.3)), 0.3, 0.3)), 0.3)), 0.6), _GLF_IDENTITY(fill(h3Stripes * .5), (_GLF_FALSE(false, (gl_FragCoord.y < 0.0)) ? _GLF_FUZZED(length(topEyeLayer)) : fill(h3Stripes * .5))));
 col = _GLF_outlined_35(col, topEyeLayer, topEyeDist);
 col = mix(col, bottomEyeLayer, fill(bottomEyeDist));
 if(_GLF_WRAPPED_IF_TRUE(true))
  {
   dist = _GLF_IDENTITY(mask, min(mask, mask));
  }
 else
  {
  }
 if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
  {
   return col;
  }
 else
  {
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = mod(vec4(27.34, -4.0, -5.7, 9.6), distance(vec3(3.9, 1.5, -67.41), vec3(176.816, 57.20, -8.4)));
  }
}
float _GLF_outlined_7(float innerMask, float cr2)
{
 return min(innerMask, - cr2);
}
float _GLF_outlined_8(float stripesMask, float cr1)
{
 return min(stripesMask, - cr1);
}
vec3 horn1(vec3 col, vec2 uv, float mainEye, float dh4, out float dist)
{
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   _GLF_color = vec4(-9.3, 3.2, -7915.4475, 8.7);
  }
 vec2 uv2 = (uv - vec2(- .32, .1)) * vec2(1., 1.1);
 float mask = circle(uv2, .7);
 mask = min(mask, - _GLF_IDENTITY(circle(uv - vec2(- .7, .3), .7), (false ? _GLF_FUZZED(uintBitsToFloat(min(40633u, 36368u))) : circle(uv - vec2(- .7, .3), .7))));
 if(_GLF_DEAD(false))
  {
   _GLF_color = (vec4(-590.276, -5.3, -560.724, 8.7) * vec4(1.1, 8052.7109, 510.761, 7.8));
  }
 mask = min(mask, circle(uv - vec2(- .45, - .2), .7));
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = vec4(-6.1, -6.7, 2462.2688, _GLF_IDENTITY(1205.5550, 0.0 + (1205.5550)));
  }
 float cr1 = circleRing(uv2 * .47, _GLF_IDENTITY(10., clamp(10., 10., 10.)), .055, .065, .0, .08, .0);
 float cr2 = circleRing(uv2 * .445, 5., .045, .05, .0, .08, .27);
 float cr3 = circleRing((uv - vec2(- .7, .3)) * .66, 10., .14, .05, .0, - .08, .0);
 float innerMask = mask - mix(.008, .015, noise(uv * 8.));
 innerMask = _GLF_outlined_7(innerMask, cr2);
 innerMask = min(innerMask, - dh4);
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < length(0.0)))))
  {
   _GLF_color = vec4(-6.3, -1.8, 5.3, -92.33);
  }
 float s = stripes(uv * vec2(3., 1.5) + vec2(time * .12, .7), StripesOpt(0.5, .3, 0.5));
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(55.10, -747.073, 0.1, -6427.6505);
  }
 float stripesMask = innerMask - mix(.005, .015, noise(uv * 15.));
 stripesMask = _GLF_outlined_8(stripesMask, cr1);
 stripesMask = min(stripesMask, - cr3);
 s = _GLF_IDENTITY(smin(s, stripesMask, .02), (smin(s, stripesMask, .02)) + 0.0);
 s = min(s, - mainEye - _GLF_IDENTITY(.008, max(.008, .008)));
 s *= .7;
 col = mix(col, vec3(.14, .21, .3), fill(mask));
 col = mix(col, vec3(.95, .9, .6), fill(innerMask));
 col = mix(col, vec3(1., .292, .173), fill(s));
 dist = mask;
 return col;
}
vec3 _GLF_outlined_9(vec3 col, float c)
{
 return mix(col, vec3(1., .292, .173), fill(c));
 if(_GLF_DEAD(false))
  {
   _GLF_color = (vec4(-0.2, -1998.3132, -5.2, 119.042) / vec4(-467.388, -9.9, -9936.3586, 5.8));
  }
}
float _GLF_outlined_36(float innerMask, vec2 muv)
{
 return min(innerMask, - circle(muv, .1));
}
vec3 _GLF_outlined_37(vec3 col, float innerMask)
{
 return mix(col, vec3(.95, .9, .6), fill(innerMask));
}
float _GLF_outlined_38(float mask)
{
 return mask;
}
vec3 horn2(vec3 col, vec2 uv, float mainEye, float dh4, out float dist)
{
 uv -= vec2(- .33, .23);
 uv = rot(3.0) * uv;
 vec2 muv = uv;
 muv += noise2(uv * 10.) * .01;
 float mask = circle(muv, .3);
 float innerMask = mask - .013;
 innerMask = _GLF_outlined_36(innerMask, muv);
 innerMask = min(innerMask, - dh4);
 float cr1 = circleRing(uv * 1.2, 10., .05, .065, .0, - .12, .0);
 if(_GLF_DEAD(false))
  {
   if(_GLF_WRAPPED_IF_TRUE(true))
    {
     _GLF_color = intBitsToFloat(ivec4(-38133, 37077, -42246, -55531));
    }
   else
    {
    }
  }
 float stripesMask = innerMask - .01;
 stripesMask = min(stripesMask, - cr1);
 stripesMask = min(stripesMask, _GLF_IDENTITY(- mainEye - .008, (false ? _GLF_FUZZED(dh4) : _GLF_IDENTITY(- mainEye - .008, (- mainEye - .008) / 1.0))));
 float c = stripesCircle(uv, StripesCircleOpt(.0, .5, 2.0, - .12, 32.7), StripesOpt(.5, 0.3, 1.));
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-2.8, 2.3, -1.6, -7268.3746);
  }
 do
  {
   c = smin(c, stripesMask, .02);
  }
 while(_GLF_WRAPPED_LOOP(false));
 float redRing = contours(circle(muv, .1), .01);
 col = mix(col, vec3(.14, .21, .3), fill(mask));
 col = _GLF_outlined_37(col, innerMask);
 col = _GLF_outlined_9(col, c);
 col = mix(col, vec3(.7, .232, .273), fill(redRing));
 dist = _GLF_outlined_38(mask);
 return col;
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(8.9, -9400.7017, -8.5, -347.242);
  }
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     _GLF_color = vec4(4577.8613, -8.5, 58.60, 9403.5352);
    }
   _GLF_color = vec4(653.945, -734.437, -782.758, -42.21);
  }
}
float _GLF_outlined_10(float bending)
{
 return bending * bending;
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-3042.6133, -6408.3995, 25.68, 7.0);
  }
}
float _GLF_outlined_11(float bending2)
{
 return bending2 * bending2;
}
float _GLF_outlined_39(float stripesMask, float eyes, vec2 uv, float time)
{
 return min(stripesMask, - eyes - mix(.0, .05, pow(noise(uv * 10. - time * .1), 4.)));
}
vec3 horn3(vec3 col, vec2 uv, float mainEye, float subEyes)
{
 uv -= vec2(0., .31);
 uv.xy = uv.yx;
 vec2 muv = uv;
 muv += noise2(uv * 10. - time * .5) * .01;
 vec2 buv = uv;
 float bending = max(0., - (uv.y + .5) * 1.4);
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   _GLF_color = vec4(2.4, 50.43, 4.1, -6.8);
  }
 bending += max(0., (uv.y + .4) * .7);
 bending = _GLF_outlined_10(bending);
 buv.x += bending;
 float s = stripes(buv * vec2(3., 1.5) + vec2(time * .12, .7), StripesOpt(0.5, .3, 0.));
 float mask = circle(muv - vec2(- _GLF_IDENTITY(.3, _GLF_ZERO(0.0, injectionSwitch.x) + (_GLF_IDENTITY(.3, min(.3, .3)))), - .5), .5);
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(floor(_GLF_IDENTITY(8706.4485, clamp(8706.4485, _GLF_IDENTITY(8706.4485, 1.0 * (8706.4485)), 8706.4485))), -386.978, vec2(7.7, -9063.7039));
  }
 float bending2 = max(0., - (uv.y + .5) * 1.8);
 do
  {
   bending2 += max(0., (uv.y + .5) * .7);
  }
 while(_GLF_WRAPPED_LOOP(false));
 bending2 = _GLF_outlined_11(bending2);
 mask = min(mask, - (uv.x + bending2));
 mask = min(mask, uv.x + .66 + uv.y * .2);
 mask = min(mask, uv.y + .7);
 float innerMask = mask - mix(.017, .012, fit01(- .2, - .1, uv.x));
 innerMask = smin(_GLF_IDENTITY(innerMask, min(innerMask, innerMask)), - subEyes, mix(0.1, 0.01, uv.x + 1.3));
 for(
     int _injected_loop_counter = int(_GLF_ZERO(0.0, injectionSwitch.x));
     _GLF_WRAPPED_LOOP(_injected_loop_counter != 1);
     _injected_loop_counter ++
 )
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(8.2, -2363.5217, 1549.1388, 9.7);
    }
  }
 float stripesMask = innerMask - .01;
 float eyes = max(mainEye, subEyes);
 stripesMask = _GLF_outlined_39(stripesMask, eyes, uv, time);
 for(
     int _injected_loop_counter = 0;
     _GLF_WRAPPED_LOOP(_injected_loop_counter < int(_GLF_ONE(1.0, injectionSwitch.y)));
     _injected_loop_counter ++
 )
  {
   s = smin(s, stripesMask, .02);
  }
 col = mix(col, vec3(.14, .21, .3), fill(mask));
 col = mix(col, vec3(.292, .8, .653), fill(innerMask));
 col = mix(col, vec3(.4, .7, 1.), fill(s));
 for(
     int _injected_loop_counter = 1;
     _GLF_WRAPPED_LOOP(_injected_loop_counter > 0);
     _injected_loop_counter --
 )
  {
   return col;
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4((-37.11), vec2(385.998, -4626.2847), -42.61);
  }
}
vec3 horn4(vec3 col, vec2 uv, float subEyes, out float dist)
{
 if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
  }
 else
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = abs(uintBitsToFloat(uvec4(113306u, 167743u, 168787u, 45693u)));
    }
  }
 vec2 cuv = rot(- .1) * (uv - vec2(- .55, - .03)) + vec2(uv.y * uv.y, .0) * .7;
 vec2 nuv = cuv + noise2(uv * 7. + .2 * time) * .015;
 float cr1 = circleRing(nuv * .85, 8., .08, .09, .0, - .12, .0);
 float cr2 = circleRing(rot(- .42) * nuv * .85, 4., .08, .09, .0, - .12, .0);
 float mask = circle(nuv, .42);
 float innerMask = mask - .015;
 innerMask = min(innerMask, - circle(nuv, .1));
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = vec4(157.074, 5449.8598, 39.20, 4.3);
  }
 innerMask = _GLF_IDENTITY(min(innerMask, - subEyes), (_GLF_IDENTITY(min(innerMask, - subEyes), 0.0 + (min(innerMask, - subEyes)))) * exp(0.0));
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(4646.1357, 2638.7933, 76.43, -114.716);
  }
 float stripesMask = innerMask - .01;
 stripesMask = min(stripesMask, - cr1);
 innerMask = min(innerMask, - cr2 + .02);
 float c = stripesCircle(cuv, StripesCircleOpt(.0, .7, 2.9, .1, 32.7), StripesOpt(.5, 0.5, 1.));
 c = smin(c, stripesMask, .02);
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(59.39, 6.3, 3.8, 302.424);
  }
 col = mix(col, vec3(.14, .21, .3), fill(mask));
 col = mix(col, vec3(.85, .202, .173), fill(innerMask));
 col = mix(col, vec3(1., .32, .17), fill(c));
 dist = mask;
 return col;
}
vec2 _GLF_outlined_12(vec2 uv)
{
 if(_GLF_WRAPPED_IF_TRUE(true))
  {
   return rot(3.0) * uv;
  }
 else
  {
  }
}
float _GLF_outlined_40(float innerMask, float dh4)
{
 return min(innerMask, - dh4);
}
float _GLF_outlined_41(float mask)
{
 return mask;
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = vec4(_GLF_IDENTITY(1193.1850, max(1193.1850, 1193.1850)), 1466.9922, -8.3, 6079.0882);
  }
}
vec3 horn5(vec3 col, vec2 uv, float dh4, out float dist)
{
 do
  {
   uv -= vec2(- .65, .32);
  }
 while(_GLF_WRAPPED_LOOP(false));
 do
  {
   uv *= 1.5;
  }
 while(_GLF_WRAPPED_LOOP(false));
 uv = _GLF_outlined_12(uv);
 vec2 muv = uv;
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = _GLF_IDENTITY(min(vec4(-6432.6056, 2.2, 6.5, 6.3), vec4(-4740.6003, 21.57, 0.6, -9043.6574)), vec4(1.0, 1.0, 1.0, 1.0) * (_GLF_IDENTITY(min(vec4(-6432.6056, 2.2, 6.5, 6.3), vec4(-4740.6003, 21.57, 0.6, -9043.6574)), (min(vec4(-6432.6056, 2.2, 6.5, 6.3), vec4(-4740.6003, 21.57, 0.6, -9043.6574))) + vec4(0.0, 0.0, 0.0, 0.0))));
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(1.0, -6602.1050, 3641.0616, 91.91);
    }
  }
 muv += noise2(uv * 10.) * .01;
 if(_GLF_DEAD(false))
  {
   _GLF_color = abs((mat3x4(-3407.3135, 5.0, 4.4, -54.20, 716.028, -39.18, -5.0, -722.211, 5.5, 4982.5438, -635.277, 4312.2564) * vec3(-23.51, 418.262, 100.048)));
  }
 float mask = circle(muv, .3);
 float innerMask = mask - .017;
 innerMask = min(innerMask, - circle(muv, .1));
 innerMask = _GLF_outlined_40(innerMask, dh4);
 float cr1 = circleRing(uv * 1.25, 10., .05, .065, .0, - .12, .0);
 float stripesMask = innerMask - .01;
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-33.79, -3.2, -5.7, -2.1);
  }
 stripesMask = min(stripesMask, - cr1);
 float c = stripesCircle(uv, StripesCircleOpt(.0, .5, 1.3, - .1, 32.7), StripesOpt(.5, 0.2, 1.));
 c = smin(c, stripesMask, .02);
 for(
     int _injected_loop_counter = 1;
     _GLF_WRAPPED_LOOP(_injected_loop_counter != 0);
     _injected_loop_counter --
 )
  {
   col = mix(col, _GLF_IDENTITY(vec3(.14, .21, .3), clamp(_GLF_IDENTITY(vec3(.14, .21, .3), (vec3(.14, .21, .3)) * vec3(1.0, 1.0, 1.0)), vec3(.14, .21, .3), _GLF_IDENTITY(vec3(.14, .21, .3), (vec3(.14, .21, .3)) * vec3(1.0, 1.0, 1.0)))), fill(mask));
  }
 col = mix(col, _GLF_IDENTITY(vec3(.55, .3, .55), (vec3(.55, .3, .55)) - vec3(0.0, 0.0, 0.0)), fill(innerMask));
 col = mix(col, vec3(.75, .15, .25), fill(c));
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   _GLF_IDENTITY(_GLF_color = (vec4(-1.6, -3.6, -6.2, 902.838) * 9.3), (_GLF_color = (vec4(-1.6, -3.6, -6.2, 902.838) * 9.3)) - _GLF_IDENTITY(vec4(0.0, 0.0, 0.0, 0.0), min(vec4(0.0, 0.0, 0.0, 0.0), vec4(0.0, 0.0, 0.0, 0.0))));
  }
 for(
     int _injected_loop_counter = 0;
     _GLF_WRAPPED_LOOP(_injected_loop_counter < 1);
     _GLF_IDENTITY(_GLF_IDENTITY(_injected_loop_counter ++, (_injected_loop_counter ++) - 0), (_injected_loop_counter ++) * 1)
 )
  {
   dist = _GLF_outlined_41(_GLF_IDENTITY(mask, min(_GLF_IDENTITY(mask, (mask) / 1.0), mask)));
  }
 do
  {
   return col;
  }
 while(_GLF_WRAPPED_LOOP(false));
}
vec3 horn6(vec3 col, vec2 uv, float mainEye, out float dist)
{
 if(_GLF_DEAD(false))
  {
   do
    {
     _GLF_color = vec4(5.0, -1.8, 2942.0999, 53.90);
    }
   while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
  }
 for(
     int _injected_loop_counter = 0;
     _GLF_WRAPPED_LOOP(_injected_loop_counter < int(_GLF_ONE(1.0, injectionSwitch.y)));
     _injected_loop_counter ++
 )
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = (+ vec4(-5.4, -415.023, 22.54, -1.4));
    }
  }
 uv -= vec2(.62, - .25);
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   _GLF_color = vec4(-2.4, -2.2, -3986.3405, 8.0);
  }
 uv *= 1.5;
 uv = rot(3.0) * uv;
 vec2 muv = uv;
 muv += noise2(uv * 6.) * .02;
 float mask = circle(muv, 1.5);
 if(_GLF_DEAD(_GLF_IDENTITY(false, false || (false))))
  {
   if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
    }
   else
    {
     _GLF_color = vec4(5.9, -805.952, 35.58, -0.6);
    }
  }
 mask = min(mask, - circle(muv, 1.1));
 float cr1 = circleRing(uv * .21, 16., .03, .035, .5, - .12, .0);
 float cr2 = circleRing(rot(.5) * uv * .335, 6., .04, .045, .8, .12, .0);
 float cr3 = circleRing(_GLF_IDENTITY(uv * .335, (_GLF_IDENTITY(uv * .335, vec2(0.0, 0.0) + (uv * .335))) / vec2(1.0, 1.0)), 6., .04, .045, .8, .09, .0);
 float innerMask = mask - .017;
 innerMask = min(innerMask, - cr3);
 float stripesMask = innerMask - mix(.005, .02, noise(uv * 10.));
 stripesMask = min(stripesMask, - cr1);
 stripesMask = min(stripesMask, - cr2 - .01);
 stripesMask = min(stripesMask, - mainEye - .002);
 float s = stripes(rot(- .5) * uv * vec2(_GLF_IDENTITY(1.3, (1.3) / 1.0), 1.) - vec2(- time * .03, - 1.2), StripesOpt(.5, 0.5, 1.));
 for(
     int _injected_loop_counter = 1;
     _GLF_WRAPPED_LOOP(_injected_loop_counter > int(_GLF_ZERO(0.0, injectionSwitch.x)));
     _injected_loop_counter --
 )
  {
   s = smin(s, stripesMask, .02);
  }
 col = mix(col, vec3(.14, .21, .3), _GLF_IDENTITY(fill(mask), (true ? fill(mask) : _GLF_FUZZED(stripesMask))));
 for(
     int _injected_loop_counter = _GLF_IDENTITY(0, (0) / 1);
     _GLF_WRAPPED_LOOP(_injected_loop_counter < 1);
     _injected_loop_counter ++
 )
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(4189.0995, 6.8, 9.2, -9.0);
    }
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-1.4, -4828.3200, 3.6, 0.3);
  }
 col = mix(col, vec3(1., .32, .17), fill(innerMask));
 col = mix(col, vec3(.85, .8, .25), fill(s));
 dist = mask;
 return col;
}
vec3 horn7(vec3 col, vec2 uv, float mainEye, out float dist)
{
 uv -= vec2(.75, .25);
 uv = uv.yx;
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   _GLF_color = (vec4(-5.6, -57.14, -65.74, -599.994));
  }
 vec2 muv = uv;
 muv += noise2(uv * 6.) * .01;
 muv = abs(muv);
 float mask = - max(muv.x - .5, muv.y - .12);
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     _GLF_color = vec4(1.7, 596.887, -6597.2442, -6.7);
    }
   _GLF_color = vec4(5.1, 3.5, 3.4, -681.362);
  }
 vec2 cruv = uv;
 if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(injectionSwitch.x > injectionSwitch.y, ! (! (injectionSwitch.x > injectionSwitch.y)))))))
  {
   _GLF_color = smoothstep(vec4(-7.6, -0.0, 2182.5502, -3.9), mat3x4(-4803.9628, 90.33, -1.1, 9.5, -5897.8165, -6174.1363, _GLF_IDENTITY(-5.1, clamp(-5.1, _GLF_IDENTITY(-5.1, (-5.1) - 0.0), -5.1)), 3.6, -294.862, -891.837, -763.430, -6.5)[0], vec4(-8.3, -26.01, -9133.0382, 6.8));
  }
 cruv -= vec2(time * .05, - .085);
 float iter = floor(cruv.x / .3);
 cruv.x = mod(cruv.x, .3) - .3 / 2.;
 vec2 r = rand2(vec2(iter, .127));
 vec2 offset = vec2(mix(- .1, .1, r.y), .0);
 float cr1 = circle(cruv - offset, mix(.05, .06, r.x));
 float innerMask = mask - .017;
 mask = max(mask, cr1);
 mask = min(mask, - (muv.x - .5));
 float stripesMask = innerMask - mix(.005, .015, noise(uv * 10.));
 stripesMask = min(stripesMask, - mainEye - .002);
 float s = stripes(uv * vec2(3., 4.) - vec2(- time * .03, - .0), StripesOpt(.5, 0.5, 0.));
 s = smin(s, stripesMask, .02);
 col = mix(col, vec3(.14, .21, .3), fill(mask));
 col = mix(col, vec3(.99, .96, .73), fill(innerMask));
 col = mix(col, vec3(.95, .82, .22), fill(s));
 dist = mask;
 return col;
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(3.6, -5634.1069, 3.5, 4471.3177);
  }
}
vec3 horn8(vec3 col, vec2 uv, float mainEye, out float dist)
{
 uv -= vec2(.75, - .5);
 vec2 muv = uv;
 muv += noise2(uv * 6.) * .01;
 muv.x += - .5 * muv.y;
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-6045.8333, -3.0, -3.3, 1.5);
  }
 muv = abs(muv);
 float mask = - max(muv.x - .26, muv.y - .11);
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(2.4, -474.380, 8.9, 34.10);
  }
 float innerMask = mask - .017;
 if(_GLF_DEAD(false))
  {
   _GLF_color = exp2(abs(vec4(-90.56, 8798.1319, -2.9, 18.10)));
  }
 float stripesMask = innerMask - mix(.002, .025, noise(uv * 15.));
 stripesMask = min(stripesMask, - mainEye - .002);
 float s = stripes(uv * vec2(4., 7.) - vec2(- time * .03, .16), StripesOpt(.5, 0.2, 0.)) * .25;
 s = smin(s, stripesMask, .02);
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(65.41, -42.89, -618.420, 285.901);
  }
 col = mix(col, vec3(.14, .21, .3), fill(mask));
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = vec4(1.7, 5.8, 9927.4782, 4633.6089);
  }
 col = mix(col, vec3(.0, .3, .6), fill(innerMask));
 if(_GLF_DEAD(false))
  {
   _GLF_color = intBitsToFloat(ivec4(-26491, 53228, 38196, 77188));
  }
 do
  {
   col = mix(col, vec3(.65, _GLF_IDENTITY(.4, clamp(_GLF_IDENTITY(.4, min(.4, .4)), .4, .4)), .65), fill(s));
  }
 while(_GLF_WRAPPED_LOOP(false));
 dist = mask;
 return col;
}
vec3 _GLF_outlined_13(vec3 col, float mask)
{
 if(_GLF_DEAD(_GLF_IDENTITY(false, (true ? false : _GLF_FUZZED(true)))))
  {
   _GLF_color = vec4(23.68, 6.5, -4.2, 1.3);
  }
 return mix(col, vec3(.14, .21, .3), fill(mask));
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = vec4(-241.073, -5.9, -139.955, 2169.7459);
  }
}
vec3 horn9(vec3 col, vec2 uv, float mainEye, out float dist)
{
 uv = uv * 1.5 - vec2(1., - _GLF_IDENTITY(.7, (.7) - _GLF_ZERO(0.0, injectionSwitch.x)));
 uv = vec2(uv.y, - uv.x);
 vec2 cruv = uv;
 uv = elbow(uv);
 if(_GLF_WRAPPED_IF_TRUE(true))
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
     _GLF_color = (mat3x4(1.1, -307.573, -90.08, 742.697, -52.15, -412.869, -8649.2945, 8.6, -5.8, -9.6, -69.85, -89.38) * (vec3(-7.9, -48.50, 6.3) * mod(vec3(736.536, 6.9, 0.5), vec3(-888.109, -3.6, 69.11))));
    }
  }
 else
  {
  }
 uv.y += - .23;
 vec2 muv = uv;
 muv += _GLF_IDENTITY(noise2(uv * 6.) * .01, (_GLF_IDENTITY(noise2(uv * 6.) * .01, (noise2(uv * 6.) * .01) / vec2(1.0, 1.0))) / vec2(1.0, 1.0));
 muv = abs(muv);
 float mask = - max(muv.x - .7, muv.y - .16);
 cruv -= vec2(.13, .13);
 cruv = elbow(cruv);
 if(_GLF_WRAPPED_IF_TRUE(true))
  {
   cruv += vec2(- .1 * time, - .26);
  }
 else
  {
  }
 float iter = floor(cruv.x / .3);
 cruv.x = _GLF_IDENTITY(mod(cruv.x, .3), 1.0 * (_GLF_IDENTITY(mod(cruv.x, .3), (mod(cruv.x, .3)) / 1.0))) - .3 / 2.;
 float cr1 = _GLF_IDENTITY(circle(cruv, mix(.07, .09, rand2(vec2(iter, .127)).x)), (_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)) ? _GLF_FUZZED(dist) : _GLF_IDENTITY(circle(cruv, mix(.07, .09, rand2(vec2(iter, .127)).x)), (circle(cruv, mix(.07, .09, rand2(vec2(iter, .127)).x))) / 1.0)));
 float cr2 = circle(cruv + vec2(.1, .12), mix(.07, .09, rand2(vec2(iter, .127)).x));
 float innerMask = mask - _GLF_IDENTITY(mix(.023, .015, noise(uv * 8.)), (mix(.023, .015, noise(uv * 8.))) / 1.0);
 innerMask = min(innerMask, - cr1);
 do
  {
   mask = max(mask, cr2);
  }
 while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
 float stripesMask = innerMask - mix(.01, .02, noise(uv * 10.));
 float s = stripes(uv * vec2(2., 3.) - vec2(time * .05, - .0), StripesOpt(.65, 0.5, 0.)) * .25;
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   _GLF_color = (3.1 * vec4(8481.6811, 3.5, -455.417, 35.60));
  }
 float s2 = stripes(uv * vec2(1., 3.) - vec2(_GLF_IDENTITY(time, 0.0 + (time)) * .025 + .1 * uv.y, - _GLF_IDENTITY(.0, (.0) / 1.0)), StripesOpt(0., - 1.3, 0.));
 s = min(s, - s2);
 s = smin(s, stripesMask, .01);
 if(_GLF_DEAD(false))
  {
   _GLF_color = atan((2.8 - vec4(-97.17, 8425.9319, -4.5, -2.0)));
  }
 col = _GLF_outlined_13(col, mask);
 if(_GLF_WRAPPED_IF_FALSE(false))
  {
  }
 else
  {
   col = mix(col, vec3(.75, .8, .84), fill(innerMask));
  }
 _GLF_IDENTITY(col = mix(col, vec3(1., .32, .17), fill(s)), (_GLF_IDENTITY(col = mix(col, vec3(1., .32, .17), fill(s)), (col = mix(col, vec3(1., .32, .17), fill(s))) * vec3(1.0, 1.0, 1.0))) + sqrt(vec3(0.0, 0.0, 0.0)));
 do
  {
   dist = mask;
  }
 while(_GLF_WRAPPED_LOOP(false));
 if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < _GLF_ZERO(0.0, injectionSwitch.x)))))
  {
  }
 else
  {
   return col;
  }
}
vec3 horn10(vec3 col, vec2 uv, float mainEye, out float dist)
{
 uv -= vec2(.85, .25);
 uv = uv.yx;
 vec2 muv = uv;
 if(_GLF_DEAD(_GLF_IDENTITY(false, true && (false))))
  {
   _GLF_color = (((- mat4(50.90, -5.1, 4.9, 4.9, -1.7, 0.8, 2.1, 5.0, -242.163, 7866.2531, 45.64, -2198.7431, -3539.7723, -38.29, 6.9, -7414.4326)) * mat2x4(5945.1139, 6.9, 0.6, 6.9, -8653.4239, 477.026, 8.7, 6.0)) * mat3x2(25.99, -391.352, -45.16, -7.7, 1811.0405, 3.3)[0]);
  }
 muv += noise2(uv * 6.) * .01;
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(769.896, 7328.3808, 0.3, -496.266);
  }
 muv = abs(muv);
 float mask = - max(muv.x - .5, muv.y - .12);
 float innerMask = _GLF_IDENTITY(mask, (mask) / 1.0) - .017;
 float stripesMask = innerMask - mix(.005, .015, noise(uv * 10.));
 if(_GLF_WRAPPED_IF_TRUE(true))
  {
   stripesMask = min(stripesMask, - mainEye - .002);
  }
 else
  {
  }
 float s = stripes(uv * vec2(4., 4.) - vec2(time * .02, - .0), StripesOpt(1.5, 0.5, _GLF_IDENTITY(0., clamp(0., _GLF_IDENTITY(0., clamp(0., 0., 0.)), 0.))));
 if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(injectionSwitch.x, (false ? _GLF_FUZZED(9.0) : injectionSwitch.x)) > injectionSwitch.y))))
  {
   _GLF_color = (mat2x4(28.41, 4.6, 72.36, 140.344, 6.9, 7997.3240, -32.93, -9.1) * mod(vec2(8.4, -6.7), 2.2));
  }
 s = smin(s, stripesMask, .02);
 for(
     int _injected_loop_counter = 0;
     _GLF_WRAPPED_LOOP(_injected_loop_counter < int(_GLF_ONE(1.0, injectionSwitch.y)));
     _injected_loop_counter ++
 )
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     _GLF_color = vec4(-9.2, 3.6, -8.8, -153.267);
    }
  }
 col = mix(col, vec3(.14, .21, .3), fill(mask));
 if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(552.287, 2.9, 4.1, -3192.0595);
    }
   col = mix(col, vec3(.292, .8, .653), fill(innerMask));
  }
 else
  {
  }
 col = mix(col, vec3(.4, .7, 1.), fill(s));
 if(_GLF_DEAD(false))
  {
   _GLF_color = fract(vec4(-9.7, -9434.9885, 8.9, 57.68));
  }
 dist = mask;
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-6688.4243, 531.764, 2.5, -950.697);
  }
 return col;
}
vec3 _GLF_outlined_42(vec3 col, float c)
{
 return mix(col, vec3(1., .32, .17), fill(c));
}
vec3 horn11(vec3 col, vec2 uv, float mainEye, out float dist)
{
 uv -= vec2(.0, - .3);
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(670.188, 9.4, -9981.4491, -42.94);
  }
 uv = rot(0.3) * uv;
 vec2 muv = uv;
 muv += noise2(uv * 10.) * .01;
 float mask = circle(muv, .38);
 float innerMask = mask - .017;
 innerMask = min(innerMask, - circle(muv, .1));
 float cr1 = circleRing(uv * .95, 10., .05, .065, .0, - _GLF_IDENTITY(.12, max(_GLF_IDENTITY(.12, clamp(.12, .12, .12)), .12)), .0);
 float cr2 = circleRing(uv * 1.023, 8., .05, .065, .5, .12, .0);
 for(
     int _injected_loop_counter = 1;
     _GLF_WRAPPED_LOOP(_injected_loop_counter > int(_GLF_ZERO(0.0, injectionSwitch.x)));
     _injected_loop_counter --
 )
  {
   mask = max(mask, cr2);
  }
 float stripesMask = innerMask - .01;
 for(
     int _injected_loop_counter = int(_GLF_ONE(1.0, injectionSwitch.y));
     _GLF_WRAPPED_LOOP(_injected_loop_counter > 0);
     _injected_loop_counter --
 )
  {
   stripesMask = min(stripesMask, - cr1);
  }
 stripesMask = min(stripesMask, - mainEye - .005);
 float c = stripesCircle(uv, StripesCircleOpt(.0, .55, 2.1, - .1, 32.7), StripesOpt(.5, .5, 1.));
 float s = stripes((rot(- 1.1) * uv) * vec2(2., 3.) + vec2(- time * .1, .6), StripesOpt(.5, .5, 1.));
 float limit = uv.x + uv.y * 2. - .1;
 c = mix(s, c, step(0., limit));
 stripesMask = smin(stripesMask, - contours(limit, .015), .02);
 c = smin(c, stripesMask, .02);
 col = mix(col, vec3(.14, .21, _GLF_IDENTITY(.3, 0.0 + (_GLF_IDENTITY(.3, (.3) + 0.0)))), fill(mask));
 if(_GLF_WRAPPED_IF_TRUE(true))
  {
   col = mix(col, vec3(.75, .8, .84), fill(innerMask));
   if(_GLF_DEAD(_GLF_IDENTITY(_GLF_IDENTITY(_GLF_FALSE(false, (gl_FragCoord.y < 0.0)), ! (! (_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))), ! (! (_GLF_IDENTITY(_GLF_FALSE(false, (gl_FragCoord.y < 0.0)), ! (! (_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))))))))
    {
     _GLF_color = vec4(-1021.2042, 87.13, -802.477, 4623.8087);
    }
  }
 else
  {
  }
 col = _GLF_outlined_42(col, c);
 dist = mask;
 return col;
}
float _GLF_outlined_14(float s, float stripesMask)
{
 return smin(s, stripesMask, .02);
}
vec4 _GLF_outlined_43()
{
 return atan(vec4(-94.28, 6.4, 0.1, -5135.7065), vec4(9.3, vec3(-7075.0058, -4543.1925, -996.280)));
}
vec3 horn12(vec3 col, vec2 uv, float mainEye, out float dist)
{
 uv -= vec2(- .1, - .25);
 if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
  }
 else
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = _GLF_outlined_43();
    }
  }
 uv = uv.yx;
 vec2 muv = uv;
 muv += noise2(uv * 6.) * .01;
 muv = abs(muv);
 float mask = - max(muv.x - .5, muv.y - .12);
 vec2 cruv = uv;
 cruv -= vec2(time * .05, .08);
 float iter = floor(cruv.x / .3);
 cruv.x = mod(cruv.x, .3) - _GLF_IDENTITY(.3 / 2., max(.3 / 2., .3 / 2.));
 float cr1 = circle(cruv, mix(.05, .06, rand2(vec2(iter, .127)).x));
 float innerMask = mask - .017;
 mask = max(mask, cr1);
 mask = min(mask, - (muv.x - .5));
 float stripesMask = _GLF_IDENTITY(innerMask, (innerMask) + 0.0) - mix(.005, .015, noise(uv * 10.));
 stripesMask = min(stripesMask, - mainEye - .002);
 float s = stripes(uv * vec2(4., 4.) - vec2(time * _GLF_IDENTITY(.02, (.02) / 1.0), _GLF_IDENTITY(- .0, min(- .0, - .0))), StripesOpt(.7, 0.5, 1.));
 s = _GLF_outlined_14(s, stripesMask);
 col = mix(col, vec3(.14, .21, .3), fill(mask));
 for(
     int _injected_loop_counter = int(_GLF_ZERO(0.0, injectionSwitch.x));
     _GLF_WRAPPED_LOOP(_injected_loop_counter != 1);
     _injected_loop_counter ++
 )
  {
   col = mix(col, vec3(1., .37, .3), fill(innerMask));
   if(_GLF_DEAD(false))
    {
     _GLF_color = (vec4(7.8, 38.72, 409.010, 13.15) / (vec4(vec2(447.893, -2.8), -0.2, -835.184)));
    }
  }
 col = mix(col, vec3(.5, .9, .3), fill(s * .5));
 if(_GLF_DEAD(_GLF_FALSE(_GLF_IDENTITY(false, ! (! (false))), (gl_FragCoord.x < 0.0))))
  {
   _GLF_color = vec4(90.95);
  }
 dist = mask;
 for(
     int _injected_loop_counter = 1;
     _GLF_WRAPPED_LOOP(_injected_loop_counter != _GLF_IDENTITY(int(_GLF_ZERO(0.0, injectionSwitch.x)), (int(_GLF_ZERO(0.0, injectionSwitch.x))) * 1));
     _injected_loop_counter --
 )
  {
   return col;
  }
}
vec3 horn13(vec3 col, vec2 uv, float bg, out float dist)
{
 uv -= vec2(.0, .3);
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(1.9, 8.1, 1459.7021, 5335.9045);
  }
 float innerMask = - bg + .004;
 innerMask = _GLF_IDENTITY(min(innerMask, uv.x), clamp(min(innerMask, uv.x), min(innerMask, uv.x), min(innerMask, uv.x)));
 float stripesMask = innerMask - mix(.005, .02, noise(uv * 10. + time));
 float s = stripes(uv * vec2(3., 1.) + vec2(- time * .05, 0.), StripesOpt(.9, .5, .0));
 s = smin(s, stripesMask, .02);
 col = mix(col, vec3(1., .37, .3), fill(innerMask));
 col = mix(col, vec3(.65, .4, .65), _GLF_IDENTITY(fill(s), (false ? _GLF_FUZZED(innerMask) : fill(s))));
 dist = innerMask;
 if(_GLF_DEAD(false))
  {
   _GLF_color = acos(vec4(883.256, 6.4, -7421.0140, -63.77));
  }
 if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(51.36, 59.24, -2116.5718, -66.29);
    }
   return col;
  }
 else
  {
  }
}
float _GLF_outlined_15(float stripesMask, float dh15)
{
 if(_GLF_DEAD(false))
  {
   _GLF_color = clamp(vec4(9609.7518, 4.5, 73.31, 9.2), -745.639, -8.4);
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(8.4, 8.7, 567.027, -122.760);
  }
 return min(stripesMask, - dh15 - .005);
}
float _GLF_outlined_44(float s, float stripesMask)
{
 return smin(s, stripesMask, .02);
}
float _GLF_outlined_45(float mask)
{
 return mask;
}
vec3 horn14(vec3 col, vec2 uv, float mainEye, float dh15, out float dist)
{
 if(_GLF_WRAPPED_IF_FALSE(_GLF_IDENTITY(false, (false) || false)))
  {
  }
 else
  {
   uv -= vec2(.445, .0);
  }
 float mask = circle(_GLF_IDENTITY(uv, max(uv, uv)) + vec2(.0, - .7 * uv.x * uv.x) - noise2(uv * 10. + time * .1) * .01, .2);
 float innerMask = mask - .013;
 if(_GLF_DEAD(false))
  {
   do
    {
     _GLF_color = vec4(74.90, 80.98, 534.270, -8853.3477);
    }
   while(_GLF_WRAPPED_LOOP(false));
  }
 float stripesMask = _GLF_IDENTITY(innerMask - mix(.005, .02, noise(uv * 10. + time)), 1.0 * (innerMask - mix(.005, .02, noise(uv * 10. + time))));
 float s = stripes(uv * vec2(3.3, 1.) + vec2(time * .03, 0.), StripesOpt(.9, .3, .0));
 stripesMask = min(stripesMask, - mainEye - .005);
 stripesMask = _GLF_outlined_15(stripesMask, dh15);
 s = _GLF_outlined_44(s, stripesMask);
 col = mix(col, vec3(.14, .21, .3), fill(mask));
 col = mix(col, vec3(.1, .3, .5), fill(innerMask));
 do
  {
   col = mix(_GLF_IDENTITY(col, (col) / vec3(1.0, 1.0, 1.0)), vec3(0.9, 0.8, 0.2), fill(s));
  }
 while(_GLF_WRAPPED_LOOP(false));
 dist = _GLF_outlined_45(mask);
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = vec4(-784.317, 32.89, -9.4, -58.87);
  }
 return col;
}
vec3 horn15(vec3 col, vec2 uv, float mainEye, out float dist)
{
 uv -= vec2(.445, - .1);
 float mask = circle(uv + vec2(.0, - .7 * uv.x * uv.x) + noise2(uv * 9. - time * .15) * .02, .2);
 float innerMask = mask;
 float stripesMask = innerMask - mix(.005, .02, noise(uv * 10. + time));
 float bending = max(0., uv.y - .0);
 if(_GLF_WRAPPED_IF_TRUE(true))
  {
   bending = bending * bending * smoothstep(.05, .15, uv.x);
  }
 else
  {
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   _GLF_color = vec4(-5.5, -24.40, -3.5, 29.04);
  }
 uv.x += - 1. * bending;
 float s = stripes(uv * vec2(3.8, 1.) + vec2(- time * .03, 0.), StripesOpt(.9, .3, .0)) * .5;
 stripesMask = min(stripesMask, - mainEye - .005);
 s = smin(s, stripesMask, _GLF_IDENTITY(.01, clamp(.01, .01, .01)));
 col = mix(col, vec3(_GLF_IDENTITY(1., min(1., _GLF_IDENTITY(1., min(1., 1.)))), .9, .65), fill(innerMask));
 col = mix(col, vec3(1., .37, .3), fill(s));
 dist = innerMask;
 return col;
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-694.244, -25.79, vec2(5.3, -6.0));
  }
}
float _GLF_outlined_46(float mask, vec2 cuv)
{
 return max(mask, - max(abs(cuv.x) - .12, abs(cuv.y + .12) - .12));
}
float _GLF_outlined_47(float stripesMask, float mainEye)
{
 do
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     _GLF_color = vec4(37.39, -9.7, 0.6, 4974.3368);
    }
  }
 while(_GLF_WRAPPED_LOOP(false));
 return min(stripesMask, - mainEye - .005);
}
vec3 horn16(vec3 col, vec2 uv, float mainEye, out float dist)
{
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-89.44, 951.034, 562.702, 1361.7007);
  }
 uv -= vec2(.525, - .15);
 vec2 cuv = uv + vec2(.0, - .7 * uv.x * uv.x) + noise2(uv * 9. - time * .15) * .01;
 float mask = circle(cuv, .12);
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   if(_GLF_WRAPPED_IF_TRUE(true))
    {
     _GLF_color = refract(vec4(-4436.6107, 22.06, 316.092, -480.318), vec4(664.090, -8223.3704, 611.329, 5.4), 7.5);
    }
   else
    {
    }
  }
 for(
     int _injected_loop_counter = 1;
     _GLF_WRAPPED_LOOP(_injected_loop_counter > 0);
     _injected_loop_counter --
 )
  {
   mask = max(mask, - max(abs(_GLF_IDENTITY(cuv.x, (false ? _GLF_FUZZED(inversesqrt(mainEye)) : cuv.x)) + .12) - .12, abs(cuv.y) - .12));
  }
 if(_GLF_WRAPPED_IF_TRUE(true))
  {
   mask = _GLF_outlined_46(mask, cuv);
  }
 else
  {
  }
 float innerMask = mask - .013;
 mask = - smin(- mask, - mainEye, .05);
 float stripesMask = innerMask - mix(.005, .02, noise(uv * 10. + time));
 innerMask = smin(innerMask, - mainEye, .01);
 float s = stripes(uv * vec2(3.8, 1.) + vec2(- time * .03, 0.), StripesOpt(.9, .3, _GLF_IDENTITY(.0, clamp(.0, .0, .0)))) * .5;
 if(_GLF_DEAD(false))
  {
   for(
       int _injected_loop_counter = int(_GLF_ZERO(0.0, injectionSwitch.x));
       _GLF_WRAPPED_LOOP(_injected_loop_counter != 1);
       _injected_loop_counter ++
   )
    {
     _GLF_IDENTITY(_GLF_color = vec4(77.83, 2348.2493, _GLF_IDENTITY(-8.1, (_GLF_IDENTITY(-8.1, max(-8.1, -8.1))) / abs(1.0)), 2407.7501), (_GLF_color = vec4(77.83, 2348.2493, -8.1, 2407.7501)) - _GLF_IDENTITY(vec4(0.0, 0.0, 0.0, 0.0), min(vec4(0.0, 0.0, 0.0, 0.0), vec4(0.0, 0.0, 0.0, 0.0))));
    }
  }
 stripesMask = _GLF_outlined_47(stripesMask, mainEye);
 s = smin(s, stripesMask, .01);
 col = mix(col, vec3(.14, .21, .3), fill(mask));
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < tan(0.0)))))
  {
   _GLF_color = _GLF_IDENTITY(vec4(47.64, -9.3, 923.771, 500.861), max(vec4(47.64, -9.3, 923.771, 500.861), vec4(47.64, -9.3, 923.771, 500.861)));
  }
 col = mix(col, vec3(_GLF_IDENTITY(.292, (.292) - 0.0), .8, .653), fill(innerMask));
 for(
     int _injected_loop_counter = int(_GLF_ZERO(0.0, injectionSwitch.x));
     _GLF_WRAPPED_LOOP(_injected_loop_counter < int(_GLF_ONE(1.0, injectionSwitch.y)));
     _injected_loop_counter ++
 )
  {
   col = mix(col, vec3(.4, .7, 1.), fill(s));
  }
 dist = mask;
 return col;
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(5117.6917, 5.8, 7.7, -0.9);
  }
}
float _GLF_outlined_16(float mask, vec2 cuv)
{
 return max(mask, - max(abs(cuv.x) - .25, abs(cuv.y + .2) - .2));
}
float _GLF_outlined_48(float stripesMask, float sides, vec2 uv)
{
 return min(stripesMask, - sides - mix(.0, .01, _GLF_IDENTITY(noise2(uv * 10.), (noise2(uv * 10.)) / vec2(1.0, 1.0)).x));
}
vec3 _GLF_outlined_49(vec3 col, float s)
{
 return mix(col, vec3(.95, .8, .1), fill(s));
}
vec3 horn17(vec3 col, vec2 uv, float mainEye, float dh11, float dh9, out float dist)
{
 uv -= vec2(.525, - _GLF_IDENTITY(_GLF_IDENTITY(.25, clamp(.25, _GLF_IDENTITY(.25, min(.25, .25)), .25)), (.25) + 0.0));
 vec2 cuv = uv + vec2(_GLF_IDENTITY(.0, 1.0 * (_GLF_IDENTITY(.0, max(.0, .0)))), - .7 * uv.x * uv.x) + noise2(_GLF_IDENTITY(uv * 9. - time * .15, clamp(uv * 9. - time * .15, uv * 9. - time * .15, uv * 9. - time * .15))) * .005;
 if(_GLF_DEAD(false))
  {
   for(
       int _injected_loop_counter = 0;
       _GLF_WRAPPED_LOOP(_injected_loop_counter != 1);
       _injected_loop_counter ++
   )
    {
     _GLF_color = vec4(4.0, 8.6, 1.7, 8.7);
    }
  }
 float mask = circle(cuv, .12);
 mask = max(mask, - max(abs(cuv.x + .12) - .12, abs(cuv.y) - .12));
 mask = _GLF_IDENTITY(max(mask, - max(abs(cuv.x) - .12, abs(cuv.y + .12) - .12)), min(max(mask, - max(abs(cuv.x) - .12, abs(cuv.y + .12) - .12)), max(mask, - max(abs(cuv.x) - .12, abs(cuv.y + .12) - .12))));
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   _GLF_color = vec4(-6616.8329, 7579.9728, -915.352, 76.38);
  }
 mask = _GLF_outlined_16(mask, cuv);
 float innerMask = mask - .013;
 mask = - smin(- mask, - mainEye, .05);
 float stripesMask = innerMask - mix(.005, .015, noise(uv * 10. + time));
 innerMask = smin(innerMask, - mainEye, .01);
 float s = stripes((rot(- .3) * uv) * vec2(3.4, 1.) + vec2(- time * .03, 0.), StripesOpt(.9, _GLF_IDENTITY(.5, max(.5, .5)), .0)) * .25;
 stripesMask = min(stripesMask, - mainEye - .005);
 float sides = max(dh11, dh9);
 if(_GLF_DEAD(false))
  {
   if(_GLF_WRAPPED_IF_FALSE(false))
    {
    }
   else
    {
     _GLF_color = vec4(-0.4, 47.21, 61.19, -72.10);
    }
  }
 for(
     int _injected_loop_counter = 1;
     _GLF_WRAPPED_LOOP(_injected_loop_counter > 0);
     _injected_loop_counter --
 )
  {
   stripesMask = _GLF_outlined_48(stripesMask, sides, uv);
  }
 s = smin(s, stripesMask, .005);
 if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
  }
 else
  {
   col = mix(col, vec3(.14, .21, .3), fill(mask));
  }
 col = mix(col, vec3(.8, .2, .15), fill(innerMask));
 col = _GLF_outlined_49(col, s);
 if(_GLF_WRAPPED_IF_FALSE(false))
  {
  }
 else
  {
   dist = mask;
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   _GLF_color = (vec4(-1393.4303, -1474.8411, 8.4, 8.3) / vec3(93.13, 95.22, -58.82).xyxz);
  }
 return col;
}
vec3 _GLF_outlined_17(vec3 col, float mask)
{
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   _GLF_color = (inversesqrt(vec4(_GLF_IDENTITY(-5.1, max(_GLF_IDENTITY(-5.1, 0.0 + (-5.1)), _GLF_IDENTITY(-5.1, (-5.1) / 1.0))), -7.5, -1.6, -703.188)) * fract(vec4(-6.4, -55.28, -617.564, 3.0)));
  }
 if(_GLF_WRAPPED_IF_FALSE(false))
  {
  }
 else
  {
   return mix(col, vec3(.14, .21, .3), fill(mask));
  }
}
float _GLF_outlined_50(float mask, vec2 cuv)
{
 return max(mask, - max(abs(cuv.x - .12) - _GLF_IDENTITY(.12, (.12) + abs(0.0)), abs(cuv.y) - .12));
 if(_GLF_DEAD(false))
  {
   _GLF_color = reflect(vec4(410.885, 2.5, -9.8, -9.6), vec4(-55.30, -395.145, 1.1, 8.5));
  }
}
float _GLF_outlined_51(float s, float stripesMask)
{
 return smin(s, stripesMask, .01);
}
vec3 horn18(vec3 col, vec2 uv, out float dist)
{
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   _GLF_color = (log2(1256.2471) - vec4(1425.9623, 9.8, -16.74, -37.25));
  }
 uv -= vec2(.965, - .12);
 vec2 cuv = uv + vec2(.0, - .7 * uv.x * uv.x) + noise2(uv * 9. - time * .15) * .01;
 float mask = circle(cuv, .12);
 for(
     int _injected_loop_counter = 1;
     _GLF_WRAPPED_LOOP(_injected_loop_counter > 0);
     _injected_loop_counter --
 )
  {
   mask = _GLF_outlined_50(mask, cuv);
  }
 mask = max(mask, - max(abs(cuv.x) - .12, abs(_GLF_IDENTITY(cuv.y, (false ? _GLF_FUZZED(trunc(mask)) : _GLF_IDENTITY(cuv.y, clamp(cuv.y, _GLF_IDENTITY(cuv.y, (true ? cuv.y : _GLF_FUZZED(-5.4))), cuv.y)))) + .12) - .12));
 float innerMask = mask - .013;
 float stripesMask = innerMask - mix(.005, .02, noise(uv * _GLF_IDENTITY(10., max(10., 10.)) + time));
 float s = stripes(uv * vec2(3.8, 1.) + _GLF_IDENTITY(vec2(_GLF_IDENTITY(- time, min(- time, _GLF_IDENTITY(- time, (_GLF_IDENTITY(- time, (- time) * 1.0)) - 0.0))) * .03, 0.), (vec2(_GLF_IDENTITY(- time, min(- time, _GLF_IDENTITY(- time, (_GLF_IDENTITY(- time, (- time) * 1.0)) - 0.0))) * .03, 0.)) - vec2(0.0, 0.0)), StripesOpt(.9, .3, .0)) * .5;
 s = _GLF_outlined_51(s, stripesMask);
 col = _GLF_outlined_17(col, mask);
 col = mix(col, vec3(.75, .8, .84), fill(innerMask));
 col = mix(col, vec3(.4, .7, 1.), fill(s));
 dist = mask;
 return col;
}
float _GLF_outlined_18(vec2 uv, vec2 n)
{
 return circle(uv + noise2(_GLF_IDENTITY(uv * 10., vec2(1.0, 1.0) * (uv * 10.)) + .5) * .05 + _GLF_IDENTITY(n, max(n, n)) - vec2(- .82, .33), .045);
}
vec3 dots(vec3 col, vec2 uv, out float dist)
{
 vec2 n = noise2(uv * 5. + time * .4) * .01;
 dist = _GLF_outlined_18(uv, n);
 if(_GLF_DEAD(false))
  {
   _GLF_color = (vec3(-3081.8559, 6.9, -6.8)[2] - vec4(6.0, 80.96, 2.1, 8.9));
  }
 dist = max(dist, circle(uv - vec2(- .9, .2), .1));
 dist = max(dist, circle(uv + noise2(uv * 10. + 1.7) * .02 + n - vec2(- .5, .49), .045));
 if(_GLF_DEAD(false))
  {
   _GLF_color = uintBitsToFloat(uvec4(149133u, 150806u, 102967u, 76926u));
  }
 dist = max(dist, circle(uv + noise2(uv * 10. + 2.7) * .02 + n - vec2(- .1, .46), .042));
 col = mix(col, vec3(.14, .21, .3), fill(dist));
 return col;
}
vec3 _GLF_outlined_19(vec3 col, vec2 uv, float mainEye, float dh15, float d)
{
 return horn14(col, uv, mainEye, dh15, d);
}
vec3 _GLF_outlined_20(vec3 col, vec2 uv, float mainEye, float dh11, float dh9, float d)
{
 return horn17(col, uv, mainEye, dh11, dh9, d);
}
float _GLF_outlined_21(float dist, float d)
{
 return max(dist, d);
}
float _GLF_outlined_22(float dist, float d)
{
 return max(dist, d);
}
vec4 _GLF_outlined_52()
{
 return vec4(-550.708, 4272.4317, 41.35, 0.2);
}
float _GLF_outlined_23(float dist, float d)
{
 return max(dist, d);
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   _GLF_color = vec4(-3563.1936, -2.6, 3648.2299, -2516.9373);
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   _GLF_color = _GLF_outlined_52();
  }
}
float _GLF_outlined_24(float dist, float mainEye)
{
 if(_GLF_WRAPPED_IF_FALSE(false))
  {
  }
 else
  {
   return max(dist, mainEye);
  }
}
vec3 _GLF_outlined_53(vec3 col, vec2 uv, float d)
{
 return dots(_GLF_IDENTITY(col, (col) * vec3(1.0, 1.0, 1.0)), uv, d);
}
float _GLF_outlined_54(float dist, float d)
{
 return max(dist, d);
}
vec3 _GLF_outlined_55(vec3 col, vec2 uv, float mainEye, float subEyes)
{
 return horn3(col, uv, mainEye, subEyes);
}
vec3 _GLF_outlined_56(vec3 col, vec3 mainEyeLayer, float mainEye)
{
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = (vec4(-3.0, 390.972, 0.8, -3.4) / uintBitsToFloat(uvec2(71617u, 156648u)).x);
  }
 return mix(col, mainEyeLayer, fill(mainEye));
}
float _GLF_outlined_57(float dist, float subEyes)
{
 return max(dist, subEyes);
}
vec3 _GLF_outlined_58(vec3 col, float dist, vec2 uv)
{
 if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
  }
 else
  {
   return mix(col, vec3(.14, .21, .3), fill(- dist - mix(.005, .02, noise(uv * 10.))));
  }
}
void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
 vec2 uv = (fragCoord / resolution.xy - .5) * resolution.xy / resolution.y;
 vec2 mouse = (iMouse.xy / resolution.xy - .5) * resolution.xy / resolution.y;
 if(iMouse.xy == vec2(0.))
  {
   mouse = vec2(0., 0.17);
  }
 float mainEye, subEyes;
 vec3 mainEyeLayer = drawMainEye(vec3(0.), uv, mouse, mainEye);
 vec3 subEyesLayer = drawSubEyes(vec3(0.), uv, mouse, subEyes);
 float backgroundRing = stripesCircle(uv, StripesCircleOpt(.4, .95, 6.5, - .1, 32.7), StripesOpt(.5, 0., 1.));
 float d, dist = - 999.;
 float dh15, dh11, dh9, dh4;
 vec3 horn15Layer = horn15(vec3(0.), uv, mainEye, dh15);
 vec3 horn11Layer = horn11(vec3(0.), uv, mainEye, dh11);
 vec3 horn9Layer = horn9(vec3(0.), uv, mainEye, dh9);
 vec3 horn4Layer = _GLF_IDENTITY(horn4(vec3(0.), uv, subEyes, dh4), (horn4(vec3(0.), uv, subEyes, dh4)) / vec3(1.0, 1.0, 1.0));
 vec3 col = vec3(1.);
 if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
  }
 else
  {
   col = _GLF_outlined_53(col, uv, d);
  }
 if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < _GLF_IDENTITY(injectionSwitch, clamp(injectionSwitch, injectionSwitch, _GLF_IDENTITY(injectionSwitch, max(injectionSwitch, injectionSwitch)))).y))))
  {
   dist = max(dist, d);
  }
 else
  {
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = (vec4(-99.03, -206.406, 6655.1534, -35.86) * mat4(24.01, 0.8, 113.463, -614.532, -6700.9630, -6.7, 8718.5833, -972.120, -736.397, 4907.2351, 1005.8469, 4.2, 1.8, -88.23, 8.6, -1.4));
  }
 for(
     int _injected_loop_counter = int(_GLF_ONE(1.0, injectionSwitch.y));
     _GLF_WRAPPED_LOOP(_injected_loop_counter > 0);
     _injected_loop_counter --
 )
  {
   do
    {
     col = _GLF_outlined_19(col, uv, mainEye, dh15, d);
    }
   while(_GLF_WRAPPED_LOOP(false));
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = (vec3(-437.485, 529.191, -3007.3262) * mat4x3(-0.5, 7.1, -7.8, 4256.8059, 4.4, -1.8, -318.949, -9373.4845, 67.68, -75.68, 423.397, -7.4));
  }
 dist = max(dist, d);
 col = _GLF_IDENTITY(mix(col, horn15Layer, fill(dh15)), (_GLF_IDENTITY(mix(col, horn15Layer, fill(dh15)), (mix(col, horn15Layer, fill(dh15))) / vec3(1.0, 1.0, 1.0))) - vec3(0.0, 0.0, 0.0));
 dist = max(dist, dh15);
 col = horn16(col, uv, mainEye, d);
 dist = max(dist, d);
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-6289.7756, -1238.4234, -3.6, -29.66);
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < tan(0.0)))))
  {
   _GLF_color = (mat3x4(411.229, -470.270, -3559.3334, 4.3, -628.650, 3.3, 8032.9141, -734.118, -55.44, 729.797, 3.4, 4.2) * vec3(-1.7, 227.969, 59.28));
  }
 col = _GLF_outlined_20(col, uv, mainEye, dh11, dh9, _GLF_IDENTITY(d, (_GLF_IDENTITY(d, min(d, _GLF_IDENTITY(d, max(d, d))))) - 0.0));
 dist = max(dist, d);
 col = horn6(col, uv, mainEye, d);
 do
  {
   dist = _GLF_outlined_54(dist, d);
  }
 while(_GLF_WRAPPED_LOOP(false));
 col = mix(col, horn11Layer, fill(dh11));
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = exp2(intBitsToFloat((ivec4(-14759, -31445, 96144, 75558) >> 55720)));
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
     _GLF_color = vec4(8.2);
    }
  }
 dist = max(dist, dh11);
 col = horn12(col, uv, mainEye, d);
 dist = max(dist, d);
 col = horn1(_GLF_IDENTITY(col, (col) * vec3(1.0, 1.0, 1.0)), uv, mainEye, dh4, d);
 dist = _GLF_outlined_21(dist, d);
 col = horn5(col, uv, dh4, d);
 dist = _GLF_IDENTITY(_GLF_outlined_22(dist, d), (false ? _GLF_FUZZED(horn11Layer.x) : _GLF_IDENTITY(_GLF_outlined_22(dist, d), (true ? _GLF_outlined_22(dist, d) : _GLF_FUZZED(dh11)))));
 _GLF_IDENTITY(col = horn2(col, uv, mainEye, dh4, d), (col = horn2(col, uv, mainEye, dh4, d)) * _GLF_IDENTITY(vec3(1.0, 1.0, 1.0), (vec3(1.0, 1.0, 1.0)) + vec3(0.0, 0.0, 0.0)));
 dist = _GLF_outlined_23(dist, d);
 col = mix(col, horn4Layer, fill(dh4));
 dist = max(dist, dh4);
 col = _GLF_outlined_55(col, uv, mainEye, subEyes);
 col = horn10(col, uv, mainEye, d);
 dist = max(dist, d);
 col = horn18(col, uv, d);
 dist = max(dist, d);
 if(_GLF_WRAPPED_IF_TRUE(true))
  {
   col = mix(col, horn9Layer, fill(dh9));
  }
 else
  {
  }
 dist = max(dist, dh9);
 col = horn8(col, uv, mainEye, d);
 dist = max(dist, d);
 col = horn13(_GLF_IDENTITY(col, (col) - vec3(0.0, 0.0, 0.0)), uv, dist, d);
 _GLF_IDENTITY(dist = max(dist, d), (dist = max(dist, d)) - log(1.0));
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(4.3, -29.79, -507.807, 84.17);
  }
 col = horn7(col, uv, mainEye, d);
 dist = max(dist, d);
 col = _GLF_outlined_56(col, mainEyeLayer, mainEye);
 _GLF_IDENTITY(dist = _GLF_outlined_24(dist, mainEye), (dist = _GLF_outlined_24(dist, mainEye)) - 0.0);
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(285.243, 4.2, 102.519, -0.9);
  }
 for(
     int _injected_loop_counter = 1;
     _GLF_WRAPPED_LOOP(_injected_loop_counter != 0);
     _injected_loop_counter --
 )
  {
   col = mix(col, subEyesLayer, fill(subEyes));
  }
 dist = _GLF_outlined_57(dist, subEyes);
 col = _GLF_outlined_58(col, dist, uv);
 fragColor = vec4(col, 1.0);
}
void main(void)
{
 iMouse = vec4(mouse * resolution, 0.0, 0.0);
 mainImage(_GLF_color, gl_FragCoord.xy);
}
