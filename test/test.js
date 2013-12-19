var should = require('should')
var excel = require('../lib/msexcel-builder')
describe('msexcel-builder', function() {
  it('should create a spreadsheet', function(done) {
    var filename = 'test.xlsx'
    var wb = excel.createWorkbook(__dirname, filename)
    var sheet = wb.createSheet('Test', 6, 21)
    for (var i=1; i<21; i++) {
      sheet.setDate(1, i)
      sheet.set(2, i, 200)
      sheet.set(3, i, 200)
      sheet.set(4, i, 'This is a test')
      sheet.set(5, i, 'This is a test')
      sheet.set(6, i, 'This is a test')
    }

    var total = 20*200
    sheet.setFormula(2, 21, 'SUM(B1:B20)', total)
    sheet.setFormula(3, 21, 'SUM(C1:C20)', total)

    wb.save(function(err) {
      should.ifError(err)
      done()
    })
  })

  describe('i2a', function() {
    var tests = [
      {input: 25, output: 'Y'},
      {input: 26, output: 'Z'},
      {input: 27, output: 'AA'},
      {input: 52, output: 'AZ'},
      {input: 53, output: 'BA'},
      {input: 78, output: 'BZ'},
      {input: 79, output: 'CA'},
      {input: 702, output: 'ZZ'},
      {input: 703, output: 'AAA'}
    ]
    tests.forEach(function(t) {
      describe('i2a('+t.input+')', function() {
        it('should equal "'+t.output+'"', function() {
          excel.i2a(t.input).should.eql(t.output)
        })
      })
    })
  })
})
