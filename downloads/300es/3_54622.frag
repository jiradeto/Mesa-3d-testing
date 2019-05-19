#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;precision mediump float;
uniform float time; // time
uniform vec2  resolution; // resolution

void main(void){
    vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / (resolution.x, resolution.y);
    vec3 destColor = vec3(1.0, 0.9, 0.3);
    float f = 0.0;
    for(float i = 0.0; i < 15.0; i++){
        float s = sin(time + i * 0.628318) * 0.5;
        float c = cos(time + i * 0.628318) * 0.5;
        f += 0.0025 / abs(length(p + vec2(c, s)) - 1.4);
    }
    _GLF_color = vec4(vec3(destColor * f * 4.0), 1.0);
}