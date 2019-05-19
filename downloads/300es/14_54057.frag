#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void )
{

    vec2 uv = gl_FragCoord.xy / resolution.xy;
    
    float pixelSeparation = 0.05 * length(resolution.xy);
    
    _GLF_color -= 0.8;
    
    vec2 diagxy = mod(gl_FragCoord.x + vec2(gl_FragCoord.y, -gl_FragCoord.y), pixelSeparation);
    
    float grad = uv.y * (pixelSeparation);
    
    float diag = clamp(grad - max(diagxy.x, diagxy.y), 0.0, 1.0); 
    
    _GLF_color = vec4(diag);
}

