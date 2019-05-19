#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {

	vec2 vUv = ( gl_FragCoord.xy / resolution.xy ) + mouse / 4.0;
	
	float o = fract(time/2.);
	float length = .2;
	if(vUv.x>o && vUv.x<o+length && vUv.y>.5){
		discard;
	
	}
	
	if(vUv.x<1.-o && vUv.x > 1.-(o+length) && vUv.y<=.5){
	 discard;	
	}

	_GLF_color = vec4( 1.0 );
}