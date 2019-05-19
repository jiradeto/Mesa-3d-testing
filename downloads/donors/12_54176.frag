




// glslsandbox uniforms
uniform float time;
uniform vec2 resolution;

// shadertoy globals
#define iTime time
#define iResolution resolution

// --------[ Original ShaderToy begins here ]---------- //
vec2 c_prod(vec2 z1, vec2 z2) {
	return vec2((z1.x*z2.x)-(z1.y*z2.y), (z1.x*z2.y)+(z1.y*z2.x));
}

vec2 f(vec2 z, vec2 c) {
	return c_prod(z,z)+c;
}

vec3 div_color(int i) {
    return vec3(float(i)/255.);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 c = (5./length(iResolution.xy))*(fragCoord-(iResolution.xy/2.))-vec2(0.5,0.);
    
    vec3 color = vec3(0);
    
    vec2 z = vec2(0,0);
    for(int i=0; i<255; i++) {
    	z = f(z, c);
        if (length(z)>2.) {
        	color = div_color(i);
        }
    }
    
    fragColor = vec4(color,1.);
}
// --------[ Original ShaderToy ends here ]---------- //

void main(void)
{
    mainImage(gl_FragColor, gl_FragCoord.xy);
}
