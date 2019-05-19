




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void )
{

    vec2 uv = gl_FragCoord.xy / resolution.xy;
    
    float pixelSeparation = 0.05 * length(resolution.xy);
    
    gl_FragColor -= 0.2;
    
    vec2 diagxy = mod(gl_FragCoord.x + vec2(gl_FragCoord.y, -gl_FragCoord.y), pixelSeparation);
    
    float grad = uv.y * (pixelSeparation);
    
    float diag = clamp(grad - max(diagxy.x, diagxy.y), 0.0, 1.0); 
    
    gl_FragColor = vec4(diag);
}

