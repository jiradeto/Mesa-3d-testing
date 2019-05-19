#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;



void main( void )
{
	    float a = 12.0;
            if (a / 12. < 1.){
                _GLF_color = vec4(1.,0.,0.,1.);
            }
	else {_GLF_color = vec4(0.,1.,0.,1.);}
}