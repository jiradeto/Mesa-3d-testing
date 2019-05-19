#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;//by 834


uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {

	vec2 uv = ( gl_FragCoord.xy / resolution.xy );
	
	vec2 pos = 2.*uv - vec2(1.);
	
	float dis = 0.55 + 0.2*cos(atan(pos.y,pos.x)*8.+time*2.4);

	vec3 color = vec3(0.44,0.4,0.9);
	
	color *= smoothstep(dis,dis+0.3,length(pos));
	
	color.rb += vec2(smoothstep(0.25,.89,dis));//length(vec2());
	
	
	
	_GLF_color = vec4( color, 1.0 );

}