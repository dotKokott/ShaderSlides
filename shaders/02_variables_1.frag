precision mediump float;

void main() {
    // float, int, bool
    float a = 0.5; // <- mind the decimals!
    int b = 5;
    
    // vec2,  vec3,   vec4
    //
    //  .xy,  .xyz,  .xyzw
    //  .yx,  .xxx,  .wyzx
    //  ...
    vec2 V = vec2(a, 0.5);
    vec2 V2 = vec2(0.1);

    vec3 V3 = vec3(0.25, 0.5, 0.75);

    V3 = V3 + V.xyx;

    vec3 color = V3;
    
    gl_FragColor = vec4(color, 1.0);
}