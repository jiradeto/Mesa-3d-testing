




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;


vec3 hsv2rgb(float h, float s, float v){
	vec4 t= vec4(1.0, 2.0/3.0, 1.0/3.0, 3.0);
	vec3 p= abs(fract(vec3(h)+t.xyz)*6.0 - vec3(t.w));
	return v*mix(vec3(t.x), clamp(p-vec3(t.x),0.0,1.0), s);
}

void main( void ) {

	//vec2 position = ( gl_FragCoord.xy / resolution.xy );
	vec2 position=(gl_FragCoord.xy/resolution.xy)*10.0-5.0;
	
	vec2 z=vec2(0.0);
	int count=0;
	for(int itr=0; itr<30; ++itr){		
		++count;
		if(length(z)>2.0 ){
			break;
		}
		
		z=vec2(z.x*z.x - z.y*z.y, 2.0*z.x*z.y)+ position.xy;
	}
	
	vec3 rgb=hsv2rgb(1.0,1.0,1.0);
	rgb=rgb*float(count)/30.0;
	
	gl_FragColor= vec4(rgb, 1.0);
	

}