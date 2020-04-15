precision mediump float;

void main() {
	float X = gl_FragCoord.x;
    float Y = gl_FragCoord.y;

    if(X < 100.) {
        gl_FragColor = vec4(1.0);
    } else {
        gl_FragColor = vec4(0.0);
    }
    
    gl_FragColor.a = 1.0;
}