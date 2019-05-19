#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {

	vec2 uv = ( gl_FragCoord.xy / resolution.xy );
	vec2 nUv = uv;
	nUv.x -= ((resolution.x-resolution.y)/2.0)/resolution.x;
	nUv.x *=  resolution.x / resolution.y;
	
	
	
	
	vec3 color = vec3(1.0);
	color *= step(distance(vec2(0.5), nUv), 0.4);
	
	vec2 nnUv = nUv;
	nnUv = fract(nnUv*5.0);
	nnUv = fract(time+nnUv);
	
	color += step(distance(vec2(0.5), nnUv), 0.2);
	
	
	color.x = step(uv.x, fract(time));
	color.y = step(uv.y, fract(time));
	
	color += step(fract(time*10.0), 0.3)*vec3(1.0);
	
	
	
	



	_GLF_color = vec4(color, 1.0);

}