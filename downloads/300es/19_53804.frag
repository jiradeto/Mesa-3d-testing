#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;precision mediump float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;


/* Math 2D Transformations */
mat2 rotate2d(in float angle){
    return mat2(cos(angle),-sin(angle), sin(angle), cos(angle));
}

float dist (vec2 a, vec2 b) {
  return pow(pow(a.x - b.x, 2.) + pow(a.y - b.y, 2.), 0.5);
}


void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    // st.x *= u_resolution.x / u_resolution.y;

    vec3 c = vec3(0.0);

    vec2 v = vec2(
      (st.x - 0.5) * 0.4 * (1.00001 - log(u_time * 0.8)/6.) + 0.64,
      (st.y - 0.5) * 0.4 * (1.00001 - log(u_time * 0.8)/6.) - 0.78
    );

    float m_d = dist(vec2(u_mouse.x / u_resolution.x, u_mouse.y / u_resolution.y), st);
    m_d = 1. - smoothstep(0.001, 0.1, m_d);

    for (int i = 2; i < 60; i += 1) {
      float x = v.x * v.x - v.y * v.y + 0.2;
      float y = 2. * v.x * v.y + 0.55;// + (m_d/10.)

      // x += log(1. - sin(log(x - y * y + sin(u_time)/2.)))/100.;


      // y = (y) + sin(u_time)/40.;
      // float ty = y;
      // y -= (sin(log(cos(x * y * y + x/2. + 0.4 - log(u_time/2.1)/22.))/2. - sin(u_time/3.)/80.));
      // y += (sin(log(cos(x * y + y/12.)/4.)));
      // x += float(i + 10)/800.;
      x += sqrt((x - y) * (sin(x * 2. + u_time/2.) - sin(y * 2. + u_time/12.)))/12.;
      




      if (abs(x) < 0.2 || abs(y) < 0.2) {
        c.x += abs(x) / 44. + 0.002 + sqrt((sin(y * 2. + u_time/12.)))/120.;
        c.z += abs(y) / 44. + 0.002 + sqrt((cos(x * 2. + u_time/12.)))/120.;
      }
      
      c.y += 0.002 + sqrt((cos(y * 2. + u_time/220.)))/120.;

      v = vec2(x ,y);

      if (abs(x) > 4. || abs(y) > 4.) {
        break;
      }
    }

  // c.x = 1. - c.x;
  // c.y = 1. - c.x;
  // c.x /= 2.;

  // c.z /= 1.8;

  // c.x = 1. - c.x;
  // if (c.z < 0.8) {
  //   // c.y = 1. - c.x;
  //   // c.z = 1. - c.z;
  // }

  float vin = dist(st, vec2(0.5, 0.5));


  // c *= 1. - vin * 1.4;  

  _GLF_color = vec4(c, 1.0);
}
