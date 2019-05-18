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

void main(void)
{
 vec2 pos = (gl_FragCoord.xy / resolution.xy) + mouse / 1.1;
 float x = fract(sin(pos.x) * 9. + sin(pos.x * 122. + 10.5) * 3. + sin(pos.x * 100. + 0.2) * 99.);
 float y = sin(pos.y) * 15. + sin(pos.x * 22. + time) * 0.5 + sin(pos.x * 8. + 0.2) * 2.;
 float r = fract(y + sin(pos.x + time));
 float b = fract(y);
 _GLF_color = vec4(r, smoothstep(r, 2.03, .3) * .7, smoothstep(b, 0.05, .34), 1.0);
}
