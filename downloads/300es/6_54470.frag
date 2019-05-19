#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;

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
	
    _GLF_color = vec4(1.0);
	
    _GLF_color += floor(uv.y - fract(dot(gl_FragCoord.xy, vec2(0.5, 0.75))) * 10.0) * 0.1;
}