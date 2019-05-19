
 


 
uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;
 
// thanks: https://wgld.org/d/glsl/
 
// Author: https://twitter.com/c0de4
// Otoshita
 
 
float random (in vec2 st) { 
    return fract(sin(dot(st.xy,vec2(12.9898,78.233)))
         * 43758.5453123);
}
 
 
// The MIT License
// Copyright © 2013 Inigo Quilez
float n( in vec2 p )
{
    vec2 i = floor( p );
    vec2 f = fract( p );
    
    vec2 u = f*f*(3.0-2.0*f);
 
    return mix( mix( random( i + vec2(0.0,0.0) ), 
                     random( i + vec2(1.0,0.0) ), u.x),
                mix( random( i + vec2(0.0,1.0) ), 
                     random( i + vec2(1.0,1.0) ), u.x), u.y);
}
 

 
void main( void )
{
    float time = time * 0.1;
    vec2 uv = ( gl_FragCoord.xy / resolution.xy )*4.0;
 
    float i0=1.2;
    float i1=0.95;
    float i2=1.5;
    vec2 i4=vec2(0.0,0.0);
    for(int s=0;s<4;s++)
    {
        vec2 r;
        r=vec2(cos(uv.y*i0-i4.y+time/i1),sin(uv.x*i0+i4.x+time/i1))/i2;
        r+=vec2(-r.y,r.x)*0.2;
        uv.xy+=r;
        
        i0*=115.93;
        i1*=729.1;
        i2*=14.7;
        i4+=r.xy*1.0+0.5*time*i1;
    }
    float r=sin(uv.x-time)*1.5+0.5;
    float b=sin(uv.y+time)*1.5+0.5;
    float g=sin((sqrt(uv.x*uv.x+uv.y*uv.y)+time))*1.5+0.5;
    vec3 c=vec3(r,g,b);
    
    
    float t = time;
    
    vec3 p = vec3(gl_FragCoord * 2. )  / min(resolution.x, resolution.y);
    for(float i = 0.; i < 4.; i++) {
        p = vec3(0.1*i, 0.4, sin(t*i)) + abs(p*p - n(vec2(p+i-t))) / dot(p/(i+1.), p+p/t/(i+1.)/(i+1.)) * n(vec2(p-i/t*p*.0015)) + p * n(vec2(p+t));
        p.z = n(p.xy-t);p.z += n(p.yy);
    }
    
    c += 2.0;
    gl_FragColor = vec4(c *=  vec3( p.xxx*.4 * p.yyy * p.zzz * .4 ),1.0);
}
