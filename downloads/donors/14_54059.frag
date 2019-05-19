

uniform vec2 resolution;
uniform float time;

vec3 colorA = vec3(0.5,0,0.5);
vec3 colorB = vec3(0.2,1.000, 0.3);

void main() {
    vec3 color = vec3(0.0);

    float pct = abs(sin(time));

    //float pct = ee_time - float(int(ee_time));

    // Mix uses pct (a value from 0-1) to
    // mix the two colors
    color = mix(colorA, colorB, pct);

    gl_FragColor = vec4(color,1.0);
}
