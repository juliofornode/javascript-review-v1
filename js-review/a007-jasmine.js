/*

JASMINE
=======

BASIC STRUCTURE

describe('testSuiteName', function() {

    beforeEach(function() {
        ...
    };

    it('should...', function() {
        expect(x).toBe(y);
    }


}


NESTING, BEFORE AND AFTER
nesting describe
beforeEach
afterEach
beforeAll
afterAll


USE OF THE THIS KEYWORD
 Another way to share variables between a beforeEach,
 it, and afterEach is through the this keyword.
 Each spec’s beforeEach/it/afterEach has the this
 as the same empty object that is set back to empty
 for the next spec’s beforeEach/it/afterEach.


BUILT-IN MATCHERS

toBe // ===
not.toBe

toEqual //literals and variables
toMatch //regular expressions
toBeDefined // not undefined
toBeUndefined
toBeNull
toBeTruthy
toBeFalsy
toContain
toBeLessThan
toBeGreaterThan
toThrow
toThrowError


SUSPEND A TEST
xdescribe
xit


MAKE IT FAIL MANUALLY
fail()


CUSTOM MATCHERS

SPIES
A spy can stub any function and tracks calls to it
and all arguments.

A spy only exists in the describe or it block
in which it is defined, and will be removed after
each spec.

There are special matchers for interacting with spies.

Every call to a spy is tracked and exposed on the
calls property.


     describe("A spy", function() {

         var julio, apellido = null;

         beforeEach(function() {
             julio = {
                entrarApellido: function(lastName) {
                    apellido = lastName;
                }
             };

            spyOn(julio, 'entrarApellido');

            julio.entrarApellido('colomer');
            julio.entrarApellido('abarca', 'another param');
         });

         it("tracks that the spy was called", function() {
            expect(julio.entrarApellido).toHaveBeenCalled();
         });

         it("tracks that the spy was called x times", function() {
            expect(julio.entrarApellido).toHaveBeenCalledTimes(2);
         });

         it("tracks all the arguments of its calls", function() {
            expect(julio.entrarApellido).toHaveBeenCalledWith('colomer');
            expect(julio.entrarApellido).toHaveBeenCalledWith('abarca', 'another param');
         });

         it("stops all execution on a function", function() {
            expect(apellido).toBeNull();
         });

     });



BUILT-IN MATCHERS FOR SPIES
toHaveBeenCalled
toHaveBeenCalledWith






 */
