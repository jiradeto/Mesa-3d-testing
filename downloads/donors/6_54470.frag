

uniform vec2 resolution;

vec2 rot(vec2 p, float a)
{
    float c = cos(a);
    float s = sin(a);
	
    return vec2( c * p.x - s * p.y, s * p.x + c * p.y);		
}

void main( void )
{
    vec2 uv = (2.0 * gl_FragCoord.xy - resolution.xy) / min(resolution.x, resolution.y);
	
    gl_FragColor = vec4(1.0);
	
    gl_FragColor += floor(uv.y - fract(dot(gl_FragCoord.xy, vec2(0.5, 0.75))) * 10.0) * 0.1;
}