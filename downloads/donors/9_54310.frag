#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform vec2 resolution;
uniform float time;

vec2 wave(vec2 f, float s) {
	for(float i = 1.; i < 2.; i++)
	{
		vec2 v = f;
		v.x += -0.75/i*sin(i*f.y+time/(50.0/s));
		v.y += 2.35/i*cos(i*f.x+time/(100.0/s));
		f=v;
	}
	return f;

}

mat2 rot(float g) {
	float s = sin(g);
	float c = cos(g);
	return mat2(c, s,
				-s, c);
}

void main(void) {
	float mx = max(resolution.x, resolution.y);
	vec2 uv = 16.0 * (2.0 * gl_FragCoord.xy - resolution) / mx;
	uv *= rot(sin(time/3.)*0.01+0.4);
	uv = wave(uv, 128.);
	uv *= rot(cos(time/2.)*0.04+0.5);

	gl_FragColor = 1. - smoothstep(0.1, 0.2, vec4(sin(uv.x+uv.y*3.)));
	gl_FragColor.g = 0.;
	gl_FragColor.b /= 2.25;
}
