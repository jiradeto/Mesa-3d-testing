




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

vec3 displace(vec3 p) {
	return vec3(sin(20.*p.y - time*5.)/(1.+ 5.*fract(time)),
		    sin(20.*p.z + time*7.)/10.,
		    sin(20.*p.x - time*3.)/10.);
}
float sphere(vec3 p) {
	return length(p) - 1.5;
}

float map(vec3 p) {
	p += displace(p);
	return sphere(p);
}

vec3 normal(vec3 p) {
	vec2 e = vec2(0.001,0);
	return normalize(vec3(
		map(p+e.xyy)-map(p-e.xyy),
		map(p+e.yxy)-map(p-e.yxy),
		map(p+e.yyx)-map(p-e.yyx)));
}

float light(vec3 p, vec3 ldir) {
	return dot(normal(p),ldir);
}

void main( void ) {
	vec2 pos = ( 2.*gl_FragCoord.xy - resolution.xy) / min(resolution.x, resolution.y);
	vec3 eye = vec3(0.,0.,-3.);
	vec3 raydir = normalize(vec3(pos.x, pos.y, 1.));
	vec3 rayp = eye;
	vec3 ldir = normalize(vec3(.8,-1.,-.7));
	bool hit = false;
	for (int i = 0; i < 100; i++) {
		float d = map(rayp);
		if (d < 0.001) {
			hit = true;
			break;
		}
		rayp += d * raydir * .3;
	}
	vec3 color = vec3(0.);
	if (hit) color = mix(vec3(0.6,0.4,0.4), vec3(0.4,0.0,0.1), light(rayp, ldir));
	else color = mix(vec3(0.7,0.8,0.6), vec3(0.8,0.6,0.1), pos.y);
	gl_FragColor = vec4( color, 1.0 );

}