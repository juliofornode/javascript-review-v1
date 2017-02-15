describe('testing getStartTime function', function() {

    it('should work for a very simple example', function() {
        var agenda = [[1,8]];
        var duration = 2;
        expect(getStartTime(agenda, duration)).toEqual(8);
    });



});