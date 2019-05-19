

uniform vec2 resolution;
uniform vec2 mouse;
uniform float time;


void circle(vec2 p, vec2 offset, float size, vec3 color, inout vec3 i){
    float l = length(p - offset);
    if(l < size){
        i = color;
    }
}


void main() {
	vec3 destColor = vec3(0.0, 0.0, 0.0);
    vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

    circle (p, vec2( 0.0,  0.0), 0.5, vec3(1.0, 0.0, 0.0), destColor);
    gl_FragColor = vec4(destColor, 1.0);

}
