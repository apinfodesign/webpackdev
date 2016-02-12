describe('My App', function() {

    it('should have a title', function() {
        browser.get('/');
        expect(browser.getTitle()).toEqual( 'Webpack App' );
    });

    describe('navigation', function() {

        beforeEach(function() {
            browser.get('/');
        });

        it('default to /view1', function() {
            //console.log( browser.getLocationAbsUrl() , 'mmmmmm');
            expect(browser.getLocationAbsUrl()).toMatch("/view1");
        });

        it('default to /view1', function() {
            const para = element.all(by.tagName('p'));
            const p1 = para.get(0);
            expect( p1.getText() ).toMatch( /Place is: Out of This World/ )
        });

        it('default to /view1', function() {
            const para = element.all(by.tagName('p'));
            const p2 = para.get(1);
            expect( p2.getText() ).toMatch( /Purpose is: Figuring It Out/ )
        });
    });

});