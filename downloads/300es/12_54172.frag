#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




#define TILE_SIZE 128.

uniform float time;
uniform vec2 resolution;

void main( void ) {

	vec2 position = ( gl_FragCoord.xy);
	
	position.x += sin(time*1.26142)*32.;
	position.y += cos(time*0.76142)*32.;

	vec2 tile = vec2(floor(position.x/TILE_SIZE),floor(position.y/TILE_SIZE));
	
	if(mod(tile.y,2.)==0.) {
		position.x += TILE_SIZE*0.5;
		tile = vec2(floor(position.x/TILE_SIZE),floor(position.y/TILE_SIZE));
	}
	
	vec2 tileCenterPos = tile * TILE_SIZE + (TILE_SIZE/2.);
	
	// dot
	
	float color = 1.-distance(position,tileCenterPos)/(TILE_SIZE/2.);

	_GLF_color = vec4( vec3( color, color, color), 1.0 );

}