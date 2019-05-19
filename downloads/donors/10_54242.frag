




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;
#define size 0.1
#define r 0.03
void main( void ) {

	vec2 position = 2.0*( gl_FragCoord.xy -0.5*resolution.xy) / min( resolution.x,resolution.y );
	position.x+=sin(5.0*position.x+2.0*time)*size*0.5;
	vec2 p=abs(mod(vec2(position.x+position.y,position.x-position.y),size));
	
	float color = length(p-0.5*size);
	if(color<r)color=sqrt(r*r-color*color)/r;
	else color=0.0;
	gl_FragColor = vec4( vec3( color),1.0);

}