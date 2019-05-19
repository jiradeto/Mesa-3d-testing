#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {
  	vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x,resolution.y);
	p*=5.;
	vec3 color=vec3(0.);
   	color=vec3(sin(p.x),0.,0.);
   
        _GLF_color =vec4(color,1.);
}