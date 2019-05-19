#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {

	vec2 d = ( gl_FragCoord.xy / resolution.xy );

                d.x = d.x-0.5;
                d.y = d.y-0.5;

                float amp = sqrt(d.x*d.x + d.y *d.y);
                float rad = atan(d.y,d.x);

                if(amp>0.3) amp = 0.3;

                d.x = amp * cos(rad) + 0.5; 
                d.y = amp * sin(rad) + 0.5;
	
	
	_GLF_color = vec4( d.x,d.y,0, 1.0 );

}