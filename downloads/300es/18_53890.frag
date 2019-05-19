#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;





//PORT from ShaderToy by JaK^3px - https:///jak.threepixels.org
//https://www.shadertoy.com/view/WdBXWV

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;


void main( void ) {

#define f(a) exp( -10.* pow( length( U -.52*cos(a+vec2(0,33)) ) , 2. ) )

//	vec2 p = -0.5 + gl_FragCoord.xy / resolution.xy;

	vec2 u=vec2(gl_FragCoord.xy);
	
    vec2  R = resolution.xy,U = ( u+u - R ) / R.y;
    
     vec4 O =   (((1.2)* .5)-.5*cos(min(6.*length(U),6.3)) ) 
        * (    .7* vec4(1,.25,0,0)
            + ( f(.65)+f(1.6)+f(2.8) ) * vec4(.8,.8,.5,0) );

	_GLF_color = vec4(O);
 // O *= O;
}
