




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;


float hash( float n )
{
    return fract(sin(n)*43758.5453);
}

float noise( in vec2 x )
{
    vec2 p = floor(x);
    vec2 f = fract(x);
    f = f*f*(3.0-2.0*f);
    float n = p.x + p.y*57.0;
    return mix(mix( hash(n+  0.0), hash(n+  1.0),f.x),
               mix( hash(n+ 57.0), hash(n+ 58.0),f.x),f.y);
}




vec2 func( in vec2 z, in vec4 t )
{
    //z -= 0.1*cos(t.xz + z.yx + vec2(0.0,2.0) + 3.0*cos(t.yw + 1.8*z.yx+vec2(0.0,1.0)) - z.xy*z.xy*0.2);
    
    z += 0.1*cos(t.xz + z.x*z.y + vec2(2.0,0.0) + z.yx*4.0 + cos(t.yw + 3.1415927*z.yx) );
    
    z /= 1.0 + z.y*z.y*0.0018;
    
    return z;
}



float dot2( in vec2 v ) { return dot(v,v); }


void main( void ) {

	vec2 p =  (resolution.xy-2.0*gl_FragCoord.xy)/resolution.y;
	vec2  ip = vec2(floor(gl_FragCoord.xy));
	
	vec3 col = vec3(0.); 

        
	vec2 q = 3.2*p - vec2(0.25,0.35);
    vec4 t = vec4( 1.0000000, -1.4142136, 1.5707963, -1.7320508 )*(time*0.2);
    
	
  vec2  z = vec2(0.0);
	
        for( int i=0; i<40; i++ ) 
        {
            z = func( z, t );
            vec3 tmp = 1.0 + 0.5*cos(1.0*length(z)+1.0+vec3(0.0,1.0,1.5) ); 
            col += exp2(-tmp*2500.0*dot2(q-z));
        }
    
	    col = col*col;
    	
	col *= 0.5+0.5*pow(16.0*q.x*q.y*(1.0-q.x)*(1.0-q.y),0.2);

	
	
	vec4 final = vec4(col,0.);
	
	gl_FragColor =  final;

}