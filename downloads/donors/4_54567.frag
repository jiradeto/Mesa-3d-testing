




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {

	vec2 position = ( gl_FragCoord.xy / resolution.xy ) ;
	float x,y,x2,y2;
	float height = 2.0;
	float width = height * resolution.x/resolution.y;
	vec4 color = vec4(1,1,1,1);

	float b = -height/2.0+height*position.y;

	float a = -0.5 -width/2.0+width* position.x;
		x=0.5+sin(time);
		y=0.0;
		for(int n=0;n<256;n++){
			x2 = x*x-y*y+a;
			y2 = 2.0 * x * y + b;
			if(x2*x2+y2*y2>4.0){
				color = vec4(0,clamp(float(n) / 77.0,0.0,1.0),0.0,1);
				break;	
			}
			x=x2;
			y=y2;
		}


	gl_FragColor = color;

}