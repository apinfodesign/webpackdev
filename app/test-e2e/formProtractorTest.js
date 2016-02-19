describe('magazine creator form', function() {

    beforeEach(function() {
        browser.get('/');
    });


    it('should display NO ERROR msg for in range age', function() {

        var age = element(by.binding('magazine.age'));

        //find css for age input and clear value
        element(by.css('input[name=age]')).clear();

        //insert valid age (from 0 to 120)
        element(by.css('input[name=age]')).sendKeys('33')

        //get display value for error msg
        var displayValue = element(by.css('input[name=age]')).element(by.xpath("..")).element(by.tagName('span')).getCssValue('display')

        expect(displayValue).toEqual('none');

    });

    it('should display ERROR  msg for out of range age ', function() {

            //find css for age input and clear value
            element(by.css('input[name=age]')).clear();

            //insert non valid age 121
            element(by.css('input[name=age]')).sendKeys('121')

            //get display value for error msg
            var displayValue = element(by.css('input[name=age]')).element(by.xpath("..")).element(by.tagName('span')).getCssValue('display')


        expect(displayValue).toEqual('inline');
        });

});