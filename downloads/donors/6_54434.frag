//P
	


#extension GL_OES_standard_derivatives: enable

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main(void) {
    vec2 uv = (gl_FragCoord.xy * 2.0 - resolution) / resolution;

    float a = 0.5;
    float t = (-1.+3.*cos(time*0.25+cos(time*0.0789)*0.1+uv.x*0.01)) / 8. * 3.14;
	
    float si = sin(a + t);
    float co = cos(a + t);

    uv *= mat2(co, -si, si, co);
	
    float x = floor(uv.x * 100.0);
	
    float h = fract(sin(x * 133.3) * 13.13);
	
    float v = 1.0 - sin(h * 2.0);
	
    float b = clamp(abs(sin(20. * time * .75 * v + uv.y * (5.0 / (2.0 + v)))) - .95, 0., 1.) * 20.;
	
    float i = v * b;
	
    vec3 rain = vec3(1.0, 1.0, 1.0);

    rain *= i;
	
    gl_FragColor = vec4(rain, i);
}