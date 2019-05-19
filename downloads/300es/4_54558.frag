#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform vec2 resolution;
uniform vec3 color1;
uniform vec3 color2;





vec3 CongoFlag( vec2 p )
{

	vec3 c = vec3(1, 1, 0);
		if(1.0- p.x > p.y) c = vec3(color1);
		if (1.0-p.x < p.y) c = vec3(color2);
			
	
	return c;
}

void main( void )
{
	vec2 p = gl_FragCoord.xy / resolution.xy;
	

	
	// default background
	vec3 vCol = vec3(0.0, 0.2, 0.0);
		

	
	vCol = CongoFlag(p);
	
	_GLF_color = vec4( vCol, 1.0 );
}