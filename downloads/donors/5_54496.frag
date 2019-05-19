




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

#define FOR_LOOP 10;

void main( void ) 
{
	vec2 pos = gl_FragCoord.xy / vec2(min(resolution.x, resolution.y));
	//if(gl_FragCoord.x < 1280.)
	if(time > 10.)
	{
		gl_FragColor = vec4(time, 0., 1, 1.);
	}
}