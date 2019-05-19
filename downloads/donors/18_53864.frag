// Sayagata
// Author: @amagitakayosi





#define PI 3.141593

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

float rect(vec2 p, float x1, float y1, float x2, float y2) {
	float d = 0.03;
	return (
		smoothstep(x1 - d, x1, p.x) * smoothstep(x2 + d, x2, p.x) * 
		smoothstep(y1 - d, y1, p.y) * smoothstep(y2 + d, y2, p.y)
	);	
}

vec2 rot(vec2 p, float t) {
	float c = cos(t), s = sin(t);
	return mat2(c, -s, s, c) * p;
}

void main( void ) {
	vec2 p = ( gl_FragCoord.xy  * 2. - resolution.xy ) / min(resolution.x, resolution.y);
	p *= 4.;
	
	p = rot(p, PI / 4.);

	vec4 c = vec4(0.);
	
	vec2 fp = fract(p);
	// ひっくり返す
	if (mod(p.x, 2.) > 1.) { fp.x = 1.- fp.x; }
	if (mod(p.y, 2.) > 1.) { fp.y = 1.- fp.y; }
	
	c += rect(fp, 0.15, 0., 0.25, 0.65);
	c += rect(fp, 0.15, 0.35, 0.45, 0.45);
	c += rect(fp, 0.15, 0., 1., 0.05);

	fp = rot(fp - .5, PI / 2.) + .5;
	c.rba += rect(fp, 0.15, 0., 0.25, 0.65);
	c.rba += rect(fp, 0.15, 0.35, 0.45, 0.45);
	c.rba += rect(fp, 0.15, 0., 1., 0.05);

	fp = rot(fp - .5, PI / 2.) + .5;
	c.gba += rect(fp, 0.15, 0., 0.25, 0.65);
	c.gba += rect(fp, 0.15, 0.35, 0.45, 0.45);
	c.gba += rect(fp, 0.15, 0., 1., 0.05);

	fp = rot(fp - .5, PI / 2.) + .5;
	c.rga += rect(fp, 0.15, 0., 0.25, 0.65);
	c.rga += rect(fp, 0.15, 0.35, 0.45, 0.45);
	c.rga += rect(fp, 0.15, 0., 1., 0.05);
		
	gl_FragColor =c;

}