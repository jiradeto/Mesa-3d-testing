




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;


mat2 r2d(float a) {
	float c = cos(a), s = sin(a);
	return mat2(c, s, -s, c);
}

float sc(vec3 p, float d) {
	p = abs(p);
	p = max(p, p.yzx);
	return min(p.x, min(p.y, p.z)) - d;
}

float rep(float p, float d) {
	return mod(p - d*.5, d) - d*.5;
}

vec3 rep(vec3 p, float d) {
	return mod(p - d*.5, d) - d*.5;
}

float dt = 0.;
float g = 0.;
float de(vec3 p) {

	vec3 q = p;
	float t = time*8.6*2.;
	float s = t*.1 + sin(t)*.1;
	q.xy += vec2(cos(time)*sin(time)*.3, sin(time)*.3);
	q.z -= dt + sin(time);
	q.xz *= r2d(time);
	q.xy *= r2d(time);
	float od = dot(q, normalize(sign(q))) - .15;

	float pl = p.y + .6;

	q = p;
	//q.y+=.2;
	q.x += sin(q.z + time)*.6;
	q.y += cos(q.z + time*2.)*.6;
	float cyl = length(q.xy) - .02;

	q = p;
	q += time*.2;
	q.xy += sin(q.z*.4)*2.;
	q = rep(q, 1.);
	float s1 = length(q) - .002 + sin(time*30.)*.002;


	p.z = rep(p.z, 2.);

	float sc2 = sc(p, .4);

	p.x = abs(p.x) - 2.;
	p.xy *= r2d(3.14*.25);
	float sc1 = sc(p, .3);

	float d = min(sc1, pl);
	d = max(d, -sc2);
	d = min(d, od);
	d = min(d, cyl);
	d = min(d, s1);

	g += .01 / (.01 + d*d);
	return d;
}

void main(void) {
	vec2 uv = gl_FragCoord.xy / resolution.xy - .5;
	uv.x *= resolution.x / resolution.y;

	dt = time*2.;

	vec3 ro = vec3(0, 0, -7. + dt);
	vec3 ta = vec3(0, 0, 0. + dt);
	vec3 fwd = normalize(ta - ro);
	vec3 left = cross(vec3(0, 1, 0), fwd);
	vec3 up = cross(fwd, left);
	vec3 rd = normalize(fwd + left*uv.x + up*uv.y);

	//rd.xy *= r2d(sin(iTime*.5)*.3);

	vec3 p;
	float t = 0., ri;
	for (float i = 0.; i < 1.; i += .01) {
		ri = i;
		p = ro + rd*t;
		float d = de(p);
		//if (d < .001) break;
		d = max(abs(d), .0002);
		t += d*.3;
	}

	vec3 c = mix(vec3(.6, .3, .3), vec3(0), abs(p.x*p.y) + ri);
	c += g*.01;
	gl_FragColor = vec4(c, 1);
}







// @lsdlive

// Live-coding session I did for a rap music set last week end.
// This is the part 1 of the shader session, this was prepared before the show.
// The code below is almost the code that was on stage at the mid-show,
// ported from atom-veda to shadertoy.

// Several code snippets you will find, as it or revisited, in this shader:
// * aiekick's phantom mode - https://www.shadertoy.com/view/MtScWW
// * balkhan's glow - https://www.shadertoy.com/view/4t2yW1
// * lj's short octahedron formula - "float od = dot(q, normalize(sign(q))) - .15;"
// * iq & mercury's hglib sdf functions
// http://iquilezles.org/www/articles/distfunctions/distfunctions.htm
// http://mercury.sexy/hg_sdf/
// * iq's signed cross sc() - http://iquilezles.org/www/articles/menger/menger.htm

// Thanks to shadertoy community & shader showdown paris, making this possible.

// This is under CC-BY-NC-SA (shadertoy default licence)




