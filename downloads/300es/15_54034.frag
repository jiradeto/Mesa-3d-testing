#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;// Author: Inigo Quiles
// Title: Impulse



uniform vec2 resolution;
uniform vec2 mouse;
uniform float time;

//  Function from Iñigo Quiles
//  www.iquilezles.org/www/articles/functions/functions.htm
float impulse( float k, float x ){
    float h = k*x;
    return h*exp(1.0-h);
}

float plot(vec2 st, float pct){
  return  smoothstep( pct-0.02, pct, st.y) -
          smoothstep( pct, pct+0.02, st.y);
}

void main() {
    vec2 st = gl_FragCoord.xy/resolution;

    float y = impulse(12.,st.x);

    vec3 color = vec3(y);

    float pct = plot(st,y);
    color = (1.0-pct)*color+pct*vec3(0.0,1.0,0.0);

    _GLF_color = vec4(color,1.0);
}