#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

//
// cellular noize
// https://thebookofshaders.com/12/?lan=jp
//

vec2 random(vec2 pos)
{
	return fract(sin(vec2(dot(pos,vec2(127.1,311.7)),dot(pos,vec2(269.5,183.3))))*43758.5453);	
}


vec4 image(vec2 pos)
{
	//1: tile space
	vec2 flPos = floor(pos);
	vec2 frPos = fract(pos);
	
	//2: cell
	float minDist = 1.0;
	for(int y = -1;y <= 1;++y){
		for(int x = -1;x <=1;++x){
			// neighbor grid 3 * 3 
			vec2 neighbor = vec2(float(x),float(y));
			// random point ( + neighbor )
			vec2 point = random(flPos + neighbor);
			// point amimation
			point = 0.4 + 0.3 * sin(time + 4.05 * point);
			// between pixel and point
			vec2 diff = neighbor + point - frPos;
			// distance point
			float dist = length(diff);
			// distance min select
			minDist = min(minDist,dist);
		}
	}
	vec3 color = vec3(sin(time * 0.3) * 0.75,cos(0.2 * time) * 0.64,0.3 * cos(time * 0.34 + sin(time*0.64))) + minDist;
	color += 1.0 - step(0.01,minDist);
	color += smoothstep(sin(length(minDist) - time),0.2,0.8) * 0.25;
	return vec4(color,1.0);
}

void main( void ) 
{
	vec2 pos = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x,resolution.y);
	_GLF_color = image(pos);
}