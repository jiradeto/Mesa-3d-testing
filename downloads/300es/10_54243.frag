#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;

uniform float time;
uniform vec2 resolution;

float de(vec3 p)
{
	float sphere=length(p-vec3(-1.,1.,3.))-1.;
	float plane=p.y;
	
	return min(sphere, plane);
}

void main( void ) {

	vec2 uv = gl_FragCoord.xy / resolution.xy-0.5;
	vec3 ro=vec3(0.);

	vec3 rd=normalize(vec3(uv.x, uv.y, 0.5));
	
	vec3 p=ro;
	
	float dist=de(p);
	int iter;
	
	for(int i=0; i<102; i++)
	{
		p=p+rd*dist;
		dist=de(p);
		if(dist<0.01)
		{
			iter=i;
			break;
		}
		iter=i;
	}
	
	vec3 color=vec3(1-iter/100);
	_GLF_color = vec4( vec3( color), 1.0 );

}