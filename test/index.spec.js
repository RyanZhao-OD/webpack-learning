describe('hello world test', () => {
    it('test example', () => {

    });
    it('chai example2', () => {
        expect('hi').to.equal('hi');
    });
    it('chai example3', () => {
        throw new Error('测试运行失败');
    });
});
