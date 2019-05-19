




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

//#define CELLS (sin(time/4.)*79.+80.)
#define CELLS 40.

float rand(vec2 p) {
	return fract(sin(p.x*61.21+p.y*45.58)*4001.0);
}

vec2 cell(vec2 p) {
	return floor(p.xy*CELLS);
}

vec2 cellorigin(vec2 ij) {
	return ij/CELLS;
}

vec2 cellcenter(vec2 ij) {
	vec2 offset = vec2(rand(ij.xy*10.), rand(ij.yx*10.))/CELLS;
	offset += vec2(sin(time+rand(ij.xy)*10.), cos(time+rand(ij.yx)*10.) )/CELLS/2.;
	return cellorigin(ij) + clamp(offset, 0., 1./CELLS);
}

float specialdist(vec2 p1, vec2 p2) {
	float d1 = length(p1 - p2);
	float d2 = max(abs(p1.x - p2.x), abs(p1.y-p2.y));
	return mix(d1, d2, .5);
}

void main( void ) {

	vec2 p1 = ( 2.*gl_FragCoord.xy-resolution.xy ) / resolution.x;
	vec2 p = p1 * (p1.x*p1.y);
	float anim = mod(time/100., 50.);
	p += anim;
	vec2 ij = cell(p);
	
	vec2 nearest = ij;
	float nearestdist = 999.;
	for (float i = -1.; i <= 1.; i++) {
	for (float j = -1.; j <= 1.; j++) {
		vec2 ijneighbor = ij.xy + vec2(i,j);
		float ijcenterdist = specialdist(p, cellcenter(ijneighbor));
		if (ijcenterdist  < nearestdist) {
			nearest = ijneighbor;
			nearestdist = ijcenterdist;
		}
	}}
	
	float color = 0.;
	color = (smoothstep(0.3, 1.0, nearestdist*CELLS) 
		 - smoothstep(0.5, .7, nearestdist*CELLS))*5.;
	color -= length(p-anim);
	//color += length(p - cellorigin(ij))*2.;
	//color += 1. - smoothstep(.002, .004, length(p-cellcenter(ij)));
	
	vec2 p2 = p1 * (p1.x*p1.y);
	
	
	vec3 color1 = mix(vec3(.0,.0,.2), vec3(.4,.9,1.), color);
	vec3 color2 = mix(vec3(1.)-color1*.2, color1, smoothstep(.00, 0.01, length(p2)));
	
	gl_FragColor = vec4(color2, 1.0);

}