#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;
float dist_2s(vec2 p,vec2 c,vec2 pt){
	vec2 l=pt-p;
	vec2 axis=vec2((c.x+c.y)/2.0,(c.x-c.y)/2.0);
	float d1=abs(dot(axis,l)/length(axis))-length(axis);
	float d2=abs(dot(vec2(axis.y,-axis.x),l)/length(axis))-length(axis);
	return max((d1),(d2));
	
}
float dist_cs(vec2 p,vec2 c,vec2 pt){
	vec2 l=pt-p;
	vec2 axis=vec2((c.x+c.y)/2.0,(c.x-c.y)/2.0);
	float d1=length(l)-length(axis);
	return d1;
	
}
void main( void ) {

	vec2 position = ( gl_FragCoord.xy / resolution.x ) ;
	vec2 nm=mouse/ resolution.x*resolution.xy;
	vec3 color = vec3(0.0);
	float d1=dist_2s(nm,normalize(vec2(0.1,0.1))*0.1,position);
	float d2=dist_2s(vec2(0.5,0.2),normalize(vec2(0.1,0.05))*0.1,position);
	if(d2<0.0){
		color=vec3(0.0,0.0,1.0);
	}
	if(d1<0.0){
		if(d1<d2){
			color=vec3(1.0,0.0,0.0);
		}
	}
	float d1c=dist_cs(nm,normalize(vec2(0.1,0.1))*0.1,position);
	float d2c=dist_cs(vec2(0.5,0.2),normalize(vec2(0.1,0.05))*0.1,position);
	if(d2c<0.0){
		color+=vec3(0.0,0.5,0.0);
	}
	if(d1c<0.0){
		color+=vec3(0.0,0.5,0.0);
		
	}
	

	_GLF_color = vec4( color, 1.0 );

}