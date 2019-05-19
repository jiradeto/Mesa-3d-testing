#version 300 es 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;
#ifdef GL_ES
precision mediump float;
#endif

#extension GL_OES_standard_derivatives : enable

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {
  	vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x,resolution.y);
	p*=5.;
	vec3 color=vec3(0.);
   	color=vec3(sin(p.x),0.,0.);
   
        gl_FragColor =vec4(color,1.);
}