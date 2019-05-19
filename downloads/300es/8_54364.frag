#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;

#extension GL_OES_standard_derivatives: enable

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

float hash(float x) {
    return fract(sin(x * 133.3) * 13.13);
}

void main(void) {
    vec2 resolution = vec2 (500.0);
    vec2 uv = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
    vec3 c = vec3(0.6, 0.7, 0.8);

    float a = 0.5;
float t = (-1.+3.*cos(time*0.25+cos(time*0.0789)*0.1+uv.x*0.01)) / 8. * 3.14;
	
    float si = sin(a +t);
    float co = cos(a + t);
	float time = time + 1.*si*sin(co*3.14);

    uv *= mat2(co, -si, si, co);
//    uv *= length(uv + vec2(0.,4.9)) * .3 + 1.;

    float v = 1.0 - sin(hash(floor(uv.x * 100.0)) * 2.0);
    float b = clamp(abs(sin(20. * time * .75 * v + uv.y * (5.0 / (2.0 + v)))) - .95, 0., 1.) * 20.;
    c *= v * b;
    _GLF_color = vec4(c, 1.0);

}