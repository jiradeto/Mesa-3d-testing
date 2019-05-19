#version 300 es 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;
precision highp float;
uniform vec2 resolution;
uniform float time;

const float EPS = 0.001;

float sphere(vec3 p) {
    return length(p) - 0.8;
}

float plane(vec3 p) {
    return dot(p, vec3(0,1,0)) + 1.0;
}

vec2 rep(vec2 p) {
    return mod(p, 4.0) - 2.0;
}

float map(vec3 p) {
    float d1 = plane(p);
    p = vec3(rep(p.xz), p.y);
    float d2 =  sphere(p);
    return min(d1, d2);
}

void main(void) {
    vec2 uv = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

    vec3 cPos = vec3(time, 4.0, -time);
    vec3 ray = normalize(vec3(uv, -1));

    float dist = 0.0;
    float t = 0.0;
    vec3 distPos = cPos;
    int steps = 0;
    for (int i = 0; i < 64; i++) {
        steps = i;
        distPos = cPos + t * ray;
        dist = map(distPos);
        if (abs(dist) < EPS || t > 50.0) break;
        t += dist;
    }

    float s = float(steps) / 64.0;
    gl_FragColor = vec4(vec3(0, s, s), 1.0);
}
