




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;
 

void main( void ) {

	vec2 p = ( gl_FragCoord.xy / resolution.xy ) + mouse / 4.0;

	float a = 0.5-abs(sin(0.5*time*p.x))+0.5;
	float b = 0.5-abs(cos(0.5*time*p.y))+0.5;
	float c = abs(sin(time))*(tan(2.0*time*(5.*p.x+p.y)) )  ;
	
	

	gl_FragColor = vec4( a*0.2,b*0.2,c*b,1.0 );

}