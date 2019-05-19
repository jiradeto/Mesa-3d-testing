




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main() {
  // gl_FragColor is a special variable a fragment shader
  // is responsible for setting
  gl_FragColor = vec4(1, 0, 0.5 / time, 1); // return redish-purple
}