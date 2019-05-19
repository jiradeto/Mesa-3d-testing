#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;



uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {
vec2 p=(gl_FragCoord.xy-.5*resolution)/min(resolution.x,resolution.y);//
    vec3 c=vec3(0);
    float t0 = fract(time + mouse.y); //mod(time, 10.0);
    for(int i=0;i<20;i++){
	float rad0 = 6.24*(float(i) + t0)/20.0;
        float x = 0.3*cos(rad0 * 1.0);
        float y = 0.3*sin(rad0 * 1.0);
        vec2 o = vec2(x,y);
	float r = fract(0.5 * t0);
	float g = fract(float(i) / 10.0);
        c += 0.01/(length(p-o))*vec3(r,g,1);
    }
    _GLF_color = vec4(c,1);
}