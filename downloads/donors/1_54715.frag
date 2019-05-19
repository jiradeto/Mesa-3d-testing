#ifdef GL_ES
precision mediump float;
#endif

#extension GL_OES_standard_derivatives : enable

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;



#define XFOV 1.5707



float de(vec3 p){
	vec3 s=vec3(4.0,4.0,4.0);
	return length(s-mod(p,8.0))-1.0;
}


void main( void ) {

	vec2 viewDir=vec2(0.0,0.0);
	vec3 pos=vec3(sin(time),cos(time)*10.0,sin(time)*20.0);
	
	vec2 rayDir=(gl_FragCoord.xy-resolution/2.0)/resolution;//x and y from -0.5 to 0.5
	rayDir=rayDir*vec2(XFOV,XFOV*(resolution.y/resolution.x))+viewDir;
	
	vec3 unitRay=vec3(cos(rayDir.x),sin(rayDir.x),sin(rayDir.y));
	unitRay=unitRay/length(unitRay);
	
	vec3 rayPos=pos;
	for (int i=0; i<50; i++){
		rayPos=rayPos+unitRay*de(rayPos);
		//if (abs(de(rayPos))<0.1||length(pos-rayPos)>100.0){break;}
	}
	
	float dist=1.0-de(rayPos);
	gl_FragColor = vec4( dist*0.0,(sin(1.*rayPos.z)/2.0+0.5)/dist*0.6,(sin(rayPos.x/10.0)/2.0+0.5)/dist, 1.0 );

}