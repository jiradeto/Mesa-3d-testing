




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

vec3 rota(vec3 gg){
	return vec3(sin(sin(gg.x*10.)+(cos(gg.y*3.2)*2.3)+cos(gg.z*1.3))+sin(gg.x*7.),
		    cos(gg.y*cos(gg.z*1.241)+sin(gg.x*1.17)+cos(gg.y*3.4)), 
		    1.2*cos(gg.y*.9))+sin(gg.x+time*0.1)+cos(gg.z*1.3);
}
void main( void ) {

	vec2 position = gl_FragCoord.xy / resolution.xy * fract(abs(sin(gl_FragCoord.x/1000.))*1.0);
	vec3 gg=vec3(position,time*0.1);
	gg=rota(gg);
	gg=rota(gg.zyx);
	gg=rota(gg.yxz);
	gg=rota(gg);
	gg=rota(gg);

	
	vec3 color = vec3(position.xy,1.);

	gl_FragColor = vec4(gg, 1.0 );

}