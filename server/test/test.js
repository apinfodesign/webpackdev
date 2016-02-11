const milesifier = require( '../lib.server/milesifier' );

const assert = require( 'assert' );

describe( 'milesifier', () => {

    it( 'milesifies a string to return its length', () => {
        assert.equal( milesifier( 'dog' ), 3 );
    });


    it( 'milesifies a string to return its length', () => {
        assert.equal( milesifier( 'dogcity' ), 7 );
    });
});