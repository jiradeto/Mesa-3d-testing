




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

#define IT 1000.

float mandelbrot(vec2 p) {
	vec2 p0 = p;
	for (float i = 0.; i < IT; i++) {
		p = vec2(p.x*p.x-p.y*p.y+p0.x, 2.*p.x*p.y+p0.y);
		if (length(p) > 2.) return i / IT;
	}
	return -1.;
}

void main( void ) {
	vec2 p = (2.* gl_FragCoord.xy - resolution.xy )/resolution.y *0.02*(pow(1. - sin(time/3.), 5.) + .01);
	float r = time /10.;
	p = vec2(p.x*sin(r)-p.y*cos(r),p.y*sin(r)+p.x*cos(r));
	p += vec2(-.50593,-.51705);
	
	float m = mandelbrot(p);
	vec3 col = vec3(.9,.9,1.);
	if (m > -1.) {
		col = mix(vec3(.0,.4,.8), vec3(.5,1.,.9),log(m)+1.); 
	}
	gl_FragColor = vec4(col, 1.0);
}