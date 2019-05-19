#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;//progress disk





float PI = 3.14159265359;

vec3 disk(vec2 p, float a) { 
	
	
	
	if (length(p) < 15.0) { 				
	 	if(length(p) > 12.0) return vec3(1.0,1.0,1.0);
		if (mod(atan(p.y,p.x) + PI+PI/2.0,PI*2.0) < PI*a) return vec3(0.2,0.2,0.2);	
		
		return vec3(1.0,1.0,1.0);		
	}
	
  return vec3(0.0,0.0,0.0);
}

void main( void ) {

	vec2 p = ( gl_FragCoord.xy  );
         
	_GLF_color = vec4(
		disk(p-vec2(16.0,16.0+32.0*0.0),0.00)+
		disk(p-vec2(16.0,16.0+32.0*1.0),0.25)+
		disk(p-vec2(16.0,16.0+32.0*2.0),0.50)+
		disk(p-vec2(16.0,16.0+32.0*3.0),0.75)+
		disk(p-vec2(16.0,16.0+32.0*4.0),1.00)+
		disk(p-vec2(16.0,16.0+32.0*5.0),1.25)+
		disk(p-vec2(16.0,16.0+32.0*6.0),1.50)+
		disk(p-vec2(16.0,16.0+32.0*7.0),1.75)+
		disk(p-vec2(16.0,16.0+32.0*8.0),2.00), 1.0 );

}