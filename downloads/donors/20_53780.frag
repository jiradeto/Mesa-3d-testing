

uniform vec2 mouse;
uniform vec2 resolution;
uniform float time;

float PHI = 1.61803398874989484820459 * 00000.1; // Golden Ratio   
float PI  = 3.14159265358979323846264 * 00000.1; // PI
float SQ2 = 1.41421356237309504880169 * 10000.0; // Square Root of Two

float gold_noise(in vec2 coordinate, in float seed){
    return fract(tan(distance(coordinate*(seed+PHI), vec2(PHI, PI)))*SQ2);
}

void main(void){
	vec2 v = (gl_FragCoord.xy - resolution/2.0) / min(resolution.y,resolution.x) * 1.0;
	vec2 vv = v; vec2 vvv = v;
	
	float R = 0.0;
	float RR = 0.0;
	float RRR = 0.0;
	float a = (.6-sin(time/400.)*10.)*6.2;
	float C = cos(a);
	float S = sin(a);
	vec2 xa=vec2(C, -S);
	vec2 ya=vec2(S, C);
	vec2 shift = vec2( 0, 1.2);
	float Z =  gold_noise(vv, time) *2000.0;
	float ZZ = 1.0 + (gold_noise(v, time))*6.2;
	float ZZZ = 1.0 + (gold_noise(v, time))*6.9;
	
	for ( int i = 0; i < 40; i++ ){
		float r = dot(v,v);
		if ( r > 1.0 )
		{
			r = (1.0)/r ;
			v.x = v.x * r;
			v.y = v.y * r;
		}
		R *= .99;
		R += r;
		if(i < 55){
			RR *= .99;
			RR += r;
			if(i < 38){
				RRR *= .999;
				RRR += r;
			}
		}
		
		v = vec2( dot(v, xa), dot(v, ya)) * Z + shift;
	}
	float c = ((mod(R,2.0)>1.0)?1.0-fract(R):fract(R));
	float cc = ((mod(RR,2.0)>1.0)?1.0-fract(RR):fract(RR));
	float ccc = ((mod(RRR,2.0)>1.0)?1.0-fract(RRR):fract(RRR));
	gl_FragColor = vec4(ccc, cc, c, 1.0); 
}