#ifdef GL_ES
precision highp float;
#endif

//#extension GL_OES_standard_derivatives : enable

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;



void main( void ){
	vec3 color;
	float len;
	float t=time;
	
	//for(int i=0;i<3;i++) {
		vec2 uv = gl_FragCoord.xy/resolution;
		
		vec2 offset = uv;
		offset-=.5;
		// unsquash circle
		offset.x*=resolution.x/resolution.y;
		len=length(offset);
		
		t+=0.07;
		
		vec2 offset_unit_vector = offset/len;
		float firstMod = sin(t)+1.0;
		float secondMod = abs(sin(len*9.0-t*2.0));
		uv += offset_unit_vector * firstMod * secondMod + mouse*2.;
		//uv += offset_unit_vector * firstMod * secondMod;
		//fract(uv)
		color[0]= .01 / length( abs(fract(uv)-.5) );
//	}


		uv = gl_FragCoord.xy/resolution;
		offset = uv;
		offset-=.5;
		offset.x*=resolution.x/resolution.y;
		len=length(offset);
		
		t+=0.07;
		
		offset_unit_vector = offset/len;
		firstMod = sin(t)+1.0;
		secondMod = abs(sin(len*9.0-t*2.0));
		uv += offset_unit_vector * firstMod * secondMod + mouse*2.;
		//uv += offset_unit_vector * firstMod * secondMod;
		//fract(uv)
		color[1]= .01 / length( abs(fract(uv)-.5) );
		
		
		uv = gl_FragCoord.xy/resolution;
	
		offset = uv;
		offset-=.5;
		offset.x*=resolution.x/resolution.y;
		len=length(offset);
		
		t+=0.07;
		
		offset_unit_vector = offset/len;
		firstMod = sin(t)+1.0;
		secondMod = abs(sin(len*9.0-t*2.0));
		uv += offset_unit_vector * firstMod * secondMod + mouse*2.;
		//uv += offset_unit_vector * firstMod * secondMod;
		//fract(uv)
		color[2]= .01 / length( abs(fract(uv)-.5) );
	
	gl_FragColor=vec4(color/.1,time);
}