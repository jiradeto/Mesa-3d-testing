precision highp float;
uniform vec2 resolution;
uniform float time;
uniform vec2 mouse;
const float EPS = 0.001;

 

float sdBox( vec3 p, vec3 b )
{
    vec3 d = abs(p) - b;
    return min(max(d.x,max(d.y,d.z)),0.0) + length(max(d,0.0));
}


float plane(vec3 p) {
    return dot(p, vec3(0,0.5,0)) + 1.0;
}

vec2 rep(vec2 p) {
    return mod(p, 8.0) - 4.0;
}

float map(vec3 p) {
    float d1 = plane(p);
    p = vec3(rep(p.xz), p.y);
    float d2 =  sdBox(vec3(p.x,p.y,p.z),vec3(1.0,0.5,8.0));
    return min(d1, d2);
}

void main(void) {
    vec2 uv = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

    vec3 cPos = vec3(mouse.x*16.0, mouse.x, -time*3.0);
    vec3 ray = normalize(vec3(uv, -0.5));

    float dist = 0.0;
    float t = 0.0;
    vec3 distPos = cPos;
    int steps = 0;
    for (int i = 0; i < 64; i++) {
        steps = i;
        distPos = cPos + t * ray;
        dist = map(distPos);
        if (abs(dist) < EPS ) break;
        t += dist;
    }

    float s = float(steps) / 64.0;
    gl_FragColor = vec4(vec3(0.8, s*0.9, 0.0), 1.0);
}
