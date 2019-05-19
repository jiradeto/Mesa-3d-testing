




uniform vec2 resolution;
uniform vec2 mouse;
uniform float time;

void main(){
    vec2 st = gl_FragCoord.xy/resolution.xy;
    vec2 toCenter = vec2(0.5,0.5)-st;
    float d = length(toCenter);
    float dd = length(sin(abs(st)-.1*time));
    vec3 color = vec3(toCenter * sin(dd*d*time), sin(dd*d*time) * .5);
    gl_FragColor = vec4(color, 1.);
}
