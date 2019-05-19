#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;// extra changes by @xprogram
// VAGINA



uniform float time;
uniform vec2 resolution;

void main( void ) {
float ss = 32.0*sin(time);
	vec2 gg = gl_FragCoord.xy;
	gg = ceil(gg / ss) * ss;
		

     vec3 d = normalize(vec3((gg - resolution.xy * .5) / resolution.x, .5));
	vec3 p, c, f, g=d, o, y=vec3(2.0,3.0,0.0);
 	o.y = 1.2*cos((o.x=0.3)*(o.z=time * 10.0)) + 2.;
	o.x -= sin(time) + 3.0;

    for( float i=.0; i<19.; i+=.05 ) {
        f = fract(c = o += d*i*.03); 
	p = floor( c )*.4;
        if( cos(p.z) + sin(p.x) > ++p.y ) {
	    	g = (f.y-.04*cos((c.x+c.z)*10.)>.7?y:f.x*y.yxz) / i;
            break;
        }
    }
    _GLF_color = vec4(g, 1.);

}
