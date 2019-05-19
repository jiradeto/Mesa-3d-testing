#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform vec2 resolution;





vec3 CongoFlag( vec2 p )
{

	vec3 c = vec3(1, 1, 0);
		if(p.x -.15 > p.y) c = vec3(1, 0, 0);
		if (p.x +.20 < p.y) c = vec3(0, 1, 0);
			
	
	return c;
}

void main( void )
{
	vec2 p = gl_FragCoord.xy / resolution.xy;
	

	
	// default background
	vec3 vCol = vec3(0.0, 0.4, 0.0);
		

	
	vCol = CongoFlag(p);
	
	_GLF_color = vec4( vCol, 1.0 );
}