#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;
uniform sampler2D buffer;


vec3 hash3( vec2 p ) {
    vec3 q = vec3( dot(p,vec2(127.1,311.7)), 
				   dot(p,vec2(269.5,183.3)), 
				   dot(p,vec2(419.2,371.9)) );
	return fract(sin(q)*43758.5453);
}


//iq voronoise
float iqnoise( in vec2 x, float u, float v ) {
    vec2 p = floor(x);
    vec2 f = fract(x);
		
	float k = 1.0+63.0*pow(1.0-v,4.0);
	
	float va = 0.0;
	float wt = 0.0;
    for( int j=-2; j<=2; j++ )
    for( int i=-2; i<=2; i++ )
    {
        vec2 g = vec2( float(i),float(j) );
		vec3 o = hash3( p + g )*vec3(u,u,1.0);
		vec2 r = g - f + o.xy;
		float d = dot(r,r);
		float ww = pow( 1.0-smoothstep(0.0,1.414,sqrt(d)), k );
		va += o.z*ww;
		wt += ww;
    }
	
    return va/wt;
}

//iq palette
vec3 palette(in float t) {
	//colors
	vec3 a = vec3(.9, 0.5, 0.5);  
	vec3 b = vec3(0.9, 0.5, 0.42);
	vec3 c = vec3(1.0, 1.0, .8);
	vec3 d = vec3(0.3, 0.15, 0.87);
	
	return a + b * cos(6.28318 * (c * t + d));
}

float sin01(in float t){
	return (sin(t) + 1.) * 0.5;
}


void main( void ) {
	
	vec2 point = gl_FragCoord.xy / resolution.xy;
	//vec2 mouse = (mouse.xy - 0.5) * 0.1; mouse is kind of ugly?
	vec2 center = vec2(0.5 - (sin(time * 0.5) * 0.3), 0.5 - (sin(sin(time * 0.25)) * 0.3));

	//aspect ratio
	float aspect = resolution.x / resolution.y;
	point.x *= aspect;
	center.x *= aspect;
	
	//center circle
	float circle = pow(smoothstep(0.2, 0., length(point - center)), 1.2) * 0.55;
	
	//circle glow
	float glow = -pow(smoothstep(1.4, 0.2, length(point - center)), 1.2) * 0.25;
	
	
	//planar distortion
	float rInv = 1. / length(point - center);
	point = point * rInv - vec2(rInv, 0.0);
	
	//sample noise
	vec2 uv = vec2(point.x, point.y + 5.*time) * .7;
	float noise = iqnoise(uv, 0.15, 1.5);
	float stepNoise = floor(noise * 140.) / 440.; //stepping irregularly gives nice shapes 
	
	//draw outline around stepped noise
	float outline = 1.0 - step(smoothstep(stepNoise - 0.03, stepNoise, noise) - (smoothstep(stepNoise, stepNoise + 0.03, noise)), 0.03);
	vec3 outlineCol = outline * palette(sin01(time * 0.2));
	
	//get tunnel color from palette. I tried directly attenuating this by length of the fragment but it kept blowing out to white
	vec3 palette = palette((stepNoise * 0.8) + sin01(time * 0.4) * 0.7);
	
	//combine
	vec3 finalColor = palette + outlineCol + circle + glow;
	//finalColor = vec3(glow + circle);
	_GLF_color = vec4(finalColor, 1.0);	
}


