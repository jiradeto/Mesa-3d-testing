




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

float font_triangle(vec2 st)
{
    float w = (1.0 - st.y) * 0.43;
    float c = step(abs(st.x), w);
    float cut_under = step(-1.0, st.y);
    return c * cut_under;
}

float font_A(vec2 st)
{
    float t0 = font_triangle(st);
    t0 *= step(st.y, 0.70);
    float t1 = font_triangle((st + vec2(0.0, 0.58)) * 1.0);
    t1 *= step(0.115, abs(st.y + 0.54));
    return t0 * (1.0 - t1);
}

void main( void ) {
    vec2 st = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
    float a = font_A(st * 1.2);
    a *= 0.4;
    vec4 color = vec4(a + 0.1, a + 0.03, 0.01, 1.0);
    gl_FragColor = color;
}