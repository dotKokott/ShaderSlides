precision mediump float;

uniform vec2 u_resolution;

void main() {
	vec2 position = gl_FragCoord.xy / u_resolution.xy;
	vec4 color;
    color.a = 1.0;

    float amplitude = 1.0;
    float frequency = 60.0;

    color.r = amplitude * cos(position.x * frequency);
	color.b = amplitude * sin(position.y * frequency);

    gl_FragColor = color;
}
