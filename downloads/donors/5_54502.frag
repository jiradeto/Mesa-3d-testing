




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main(void){
	vec4 FragmentInputgl_FragCoord = gl_FragCoord;
	float AccessVec4A = FragmentInputgl_FragCoord[0];
	float AccessVec4B=FragmentInputgl_FragCoord[1];
	float AccessVec4C=FragmentInputgl_FragCoord[2];
	float  AccessVec4D=FragmentInputgl_FragCoord[3];
	vec4 BuildVec4Vec4 = vec4(gl_FragCoord.x, AccessVec4B, (0.000000), (1.000000));
	gl_FragColor = BuildVec4Vec4;

}