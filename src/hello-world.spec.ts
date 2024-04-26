describe('Hello world', () => {
  it('Should return hello world', async () => {
    const response = await fetch('http://localhost:3100/api/hello-world');
    const text = await response.text();

    expect(text).toBe('Hello World!');
  });
});
