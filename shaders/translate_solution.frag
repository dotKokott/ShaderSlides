precision mediump float;

void main() {
	float X = gl_FragCoord.x;
    float Y = gl_FragCoord.y;

	if(X > 100.0) {
		gl_FragColor.r = 1.0;
        gl_FragColor.g = 1.0;
        gl_FragColor.b = 1.0;
        gl_FragColor.a = 1.0;
	} else {
		gl_FragColor.a = 0.0;
	}
}
