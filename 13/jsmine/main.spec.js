describe('main.js', function(){
    describe('calculator', function(){
        it('validate expression', function(){
            spyOn(window, 'updateResult').and.stub();
            calculate('3+a');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized');
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        });

        it('called add', function(){
            spyOn(Calculator.prototype, 'add');

            calculate('3+4')

            expect(Calculator.prototype.add).toHaveBeenCalledTimes(2);
        })
    })
})