#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

bool aa(vec2 xx) {
	return length(xx-resolution*0.5)*5.0<resolution[0];
}

void main( void ) {
	_GLF_color = aa(gl_FragCoord.xy)?
		vec4(gl_FragCoord.xy[0]/resolution[0],
			    (sin(gl_FragCoord.xy[0]/resolution[0] + 10.0 * time/3.141592653589793)+1.0)/2.0,
			    (sin(10.0 * time/3.141592653589793)+1.0)/2.0,
			    1.0):
	vec4((sin(gl_FragCoord.xy[0]/resolution[0] + 10.0 * time/3.141592653589793)+1.0)/2.0,
	     	gl_FragCoord.xy[0]/resolution[0],	    
			    (sin(10.0 * time/3.141592653589793)+1.0)/2.0,
			    1.0);
}