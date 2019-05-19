#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

#define RIGHT_HALF gl_FragCoord.x > resolution.x * .5
#define PIXELATION 0.025
#define Pi 3.1415926
vec2 toEuclidean( vec2 uv ) 
{
	float l = uv.y / Pi;
	float a = uv.x * Pi;
	uv = vec2( sin( a ), cos( a ) );
	
	return uv * l;
}
bool checker( vec2 uv )
{
	return( mod( uv.x, 0.625 ) < 0.3125 ) ^^
	      ( mod( uv.y, 0.625 ) < 0.3125 ) ;
}

float pixelate( inout vec2 uv )
{
	vec2 pix = mod( uv, PIXELATION );
	if( RIGHT_HALF ) uv -= pix - PIXELATION * .5;
	pix -= PIXELATION * .5;
	return smoothstep( PIXELATION, 0., length(pix) );
}

void main( void ) {
	vec2 uv = ( gl_FragCoord.xy / resolution.xy ) * 2. - 1.;
	vec4 background = vec4(smoothstep(2.,-4.,uv.y) );
	uv.x *= resolution.x/resolution.y;
	
	float shade_pixel = pixelate( uv );
	
	uv = uv * .5 + .5;
	if( uv.y > 0.3125 )
	uv = toEuclidean ( uv - vec2( 0., 0.3125 ) );
	uv.x += .1 * time;
	vec2 p = uv;
	p = mod(p*8., 2.5)-1.25; 
	
	vec2 wob = vec2( cos(time), sin(time) );
	if( checker( uv ) )
		p += .25 * wob * sin(time*3.);
	else
		p *= .825 + .025 * sin( (-sin(p.x+time)+cos(p.y+time)) * 20.);
	
	vec3 n = vec3( p, cos(length(p)*3.1415926*.5) );
	n = normalize(n);
	vec3 light = 8. * vec3(sin(time*3.)+sin(time*4.)+.1*time+.5,sin(time*.2)+.5,sin(time)+1.5);
	vec3 light_n = light - n - 8.*vec3(uv, 0.0);
	light_n = normalize( light_n );

	float intensity = dot( light_n, n);
	vec4 c1 = vec4( 1.5- clamp(pow(.25,intensity), 0., 1.) );
	vec4 c2 = vec4( n.x*.5+.5,n.y*.5+.5,n.z*.5+.5,1.);
	_GLF_color = (c1*c2);
	_GLF_color = mix( _GLF_color, background, 
			   		smoothstep(.9,1.0,length(p))
			  );
	if( RIGHT_HALF ) _GLF_color *= shade_pixel;
}