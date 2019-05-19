#version 300 es 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;
#ifdef GL_ES
precision mediump float;
#endif

#extension GL_OES_standard_derivatives : enable

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {
	
	float t=time;
	float z=1.0;
	const int n=500;
	
	vec3 startColor=normalize(vec3(1.5,0.0,1.0));
	vec3 endColor=normalize(vec3(1.0,1.0,0.5));
	
	float startRadius=0.4;
	float endRadius=0.7;
	
	float power=0.3;
	float duration=0.6;
	
	vec2 s=resolution.xy, v=z*(2.0*gl_FragCoord.xy-s)/s.y;
	v*=mouse.y/s.y*10.0;
	duration=mouse.x/s.x*10.0;
	
	vec3 col=vec3(0.0);
	
	float dMax=duration;
	float mb=0.0;
	float mbRadius=0.0;
	float sum=0.0;
	
	for(int i=0;i<n;i++){
		float d = fract(t*power+48934.4238*sin(float(i)*692.7398))*duration;
		float a = 6.28*float(i)/float(n);
		
		float x = d*cos(a);
		float y = d*sin(a);
		
		float distRatio = d/dMax;
		
		mbRadius = mix(startRadius, endRadius, distRatio);
		
		vec2 p = v - vec2(x,y);
		mb = mbRadius/dot(p,p);
		
		sum += mb;
		
		col = mix(col, mix(startColor, endColor, distRatio), mb/sum);
	}
	
	sum /= float(n);
    
    col = normalize(col) * sum;
    
    sum = clamp(sum, 0., .4);
    
    
   
	
	

	gl_FragColor=vec4(col*0.00002,1.0);

}
